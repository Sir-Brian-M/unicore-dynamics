"use client";

import { useEffect, useState, useCallback, FormEvent } from "react";
import { Lock, Package, ShoppingBag, Eye, RefreshCw, LogOut, Check } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthRuler from "@/components/GrowthRuler";
import { formatPrice } from "@/data/products";

type OrderItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  reference: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  payment_method: "paystack" | "delivery";
  payment_status: "pending" | "paid" | "failed";
  order_status: "placed" | "processing" | "shipped" | "delivered" | "cancelled";
  subtotal: number;
  delivery_fee: number;
  total: number;
  items: OrderItem[];
  created_at: string;
};

type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "inventory">("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [updatingRef, setUpdatingRef] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [editingStockSlug, setEditingStockSlug] = useState<string | null>(null);
  const [editingStockVal, setEditingStockVal] = useState<number>(0);
  const [adminToken, setAdminToken] = useState<string | null>(null);

  // Check authorization token on mount
  useEffect(() => {
    const token = localStorage.getItem("unicore_admin_token");
    if (token === "unicore_admin_session_active") {
      setIsAuthorized(true);
      setAdminToken(token);
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    if (!adminToken) return;
    setLoadingOrders(true);
    try {
      const res = await fetch("/api/admin/orders", {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoadingOrders(false);
    }
  }, [adminToken]);

  const fetchProducts = useCallback(async () => {
    if (!adminToken) return;
    setLoadingProducts(true);
    try {
      const res = await fetch("/api/admin/products", {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoadingProducts(false);
    }
  }, [adminToken]);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthorized && adminToken) {
      fetchOrders();
      fetchProducts();
    }
  }, [isAuthorized, adminToken, fetchOrders, fetchProducts]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("unicore_admin_token", data.token);
        setAdminToken(data.token);
        setIsAuthorized(true);
      } else {
        setLoginError(data.error || "Access denied.");
      }
    } catch {
      setLoginError("Server communication failed.");
    }
  }

  function handleLogout() {
    localStorage.removeItem("unicore_admin_token");
    setAdminToken(null);
    setIsAuthorized(false);
    setOrders([]);
    setProducts([]);
  }

  async function updateOrderStatus(reference: string, newStatus: string) {
    if (!adminToken) return;
    setUpdatingRef(reference);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ reference, order_status: newStatus }),
      });
      if (res.ok) {
        const updated = await res.json();
        setOrders((prev) => prev.map((o) => (o.reference === reference ? updated : o)));
        if (selectedOrder?.reference === reference) {
          setSelectedOrder(updated);
        }
      }
    } catch (err) {
      console.error("Failed to update order status", err);
    } finally {
      setUpdatingRef(null);
    }
  }

  async function updatePaymentStatus(reference: string, newStatus: string) {
    if (!adminToken) return;
    setUpdatingRef(reference);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ reference, payment_status: newStatus }),
      });
      if (res.ok) {
        const updated = await res.json();
        setOrders((prev) => prev.map((o) => (o.reference === reference ? updated : o)));
        if (selectedOrder?.reference === reference) {
          setSelectedOrder(updated);
        }
      }
    } catch (err) {
      console.error("Failed to update payment status", err);
    } finally {
      setUpdatingRef(null);
    }
  }

  async function saveStockUpdate(slug: string) {
    if (!adminToken) return;
    try {
      const res = await fetch("/api/admin/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ slug, stock: editingStockVal }),
      });
      if (res.ok) {
        const updated = await res.json();
        setProducts((prev) => prev.map((p) => (p.slug === slug ? updated : p)));
        setEditingStockSlug(null);
      }
    } catch (err) {
      console.error("Failed to update stock", err);
    }
  }

  if (!isAuthorized) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main className="mx-auto max-w-content px-5 sm:px-8 py-24 flex items-center justify-center">
          <div className="bg-sand rounded-2xl p-8 max-w-md w-full border border-ink/15 shadow-xl">
            <div className="flex items-center justify-center bg-teal/15 text-teal w-12 h-12 rounded-full mx-auto mb-6">
              <Lock size={20} />
            </div>
            <h1 className="font-display font-semibold text-2xl text-ink text-center mb-2">
              Admin Access
            </h1>
            <p className="text-sm text-ink/60 text-center mb-6">
              Enter the passcode to access inventory and orders management.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                required
                placeholder="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full rounded-full border border-ink/15 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-ink font-mono text-center"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
              >
                Access Dashboard
              </button>
            </form>
            {loginError && (
              <p className="mt-4 text-xs text-brick text-center bg-brick/10 py-2 rounded-xl font-medium">
                {loginError}
              </p>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-10">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10">
          {/* Sidebar Navigation */}
          <aside className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="font-display font-semibold text-xl text-ink">Admin</h1>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 text-ink/50 hover:text-brick hover:bg-brick/5 rounded-full transition-colors"
                >
                  <LogOut size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium border text-left transition-colors ${
                    activeTab === "orders"
                      ? "bg-ink text-stone border-ink"
                      : "bg-white/40 text-ink/75 border-ink/10 hover:bg-sand"
                  }`}
                >
                  <ShoppingBag size={14} />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab("inventory")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium border text-left transition-colors ${
                    activeTab === "inventory"
                      ? "bg-ink text-stone border-ink"
                      : "bg-white/40 text-ink/75 border-ink/10 hover:bg-sand"
                  }`}
                >
                  <Package size={14} />
                  Inventory
                </button>
              </div>
            </div>

            {/* Vertical signature Growth Ruler decorative motif */}
            <div className="hidden lg:block border border-ink/10 rounded-2xl p-4 bg-white/20 relative overflow-hidden">
              <p className="font-mono text-[9px] uppercase tracking-wider text-ink/40 mb-4 text-center">
                Growth Monitor
              </p>
              <GrowthRuler
                orientation="vertical"
                highlight={[2, 6, 10]}
                className="h-96 mx-auto text-ink/30"
              />
            </div>
          </aside>

          {/* Main Workspace */}
          <section className="space-y-8">
            {activeTab === "orders" ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-display font-semibold text-2xl text-ink">Orders</h2>
                  <button
                    onClick={fetchOrders}
                    disabled={loadingOrders}
                    className="p-2 bg-sand text-ink/70 hover:text-ink rounded-full transition-colors disabled:opacity-50"
                  >
                    <RefreshCw size={16} className={loadingOrders ? "animate-spin" : ""} />
                  </button>
                </div>

                {loadingOrders ? (
                  <p className="text-sm text-ink/50 font-mono">Loading orders...</p>
                ) : orders.length === 0 ? (
                  <p className="text-sm text-ink/50">No orders placed yet.</p>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white/40">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-sand/65 border-b border-ink/10 font-mono text-[10px] text-ink/60 uppercase">
                          <th className="p-4">Reference</th>
                          <th className="p-4">Customer</th>
                          <th className="p-4">Total</th>
                          <th className="p-4">Payment</th>
                          <th className="p-4">Order Status</th>
                          <th className="p-4">Date</th>
                          <th className="p-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/10 text-sm">
                        {orders.map((o) => (
                          <tr key={o.reference} className="hover:bg-sand/20">
                            <td className="p-4 font-mono font-semibold">{o.reference}</td>
                            <td className="p-4">
                              <p className="font-medium text-ink">{o.customer_name}</p>
                              <p className="text-xs text-ink/50">{o.customer_phone}</p>
                            </td>
                            <td className="p-4 font-mono font-semibold">{formatPrice(o.total)}</td>
                            <td className="p-4">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold border ${
                                  o.payment_status === "paid"
                                    ? "bg-teal/10 border-teal/20 text-teal"
                                    : "bg-brick/10 border-brick/20 text-brick"
                                }`}
                              >
                                {o.payment_status}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="capitalize font-medium text-ink">
                                {o.order_status}
                              </span>
                            </td>
                            <td className="p-4 text-xs text-ink/65">
                              {new Date(o.created_at).toLocaleDateString("en-KE")}
                            </td>
                            <td className="p-4">
                              <button
                                onClick={() => setSelectedOrder(o)}
                                className="p-1.5 bg-sand/60 hover:bg-sand text-ink rounded-lg transition-colors"
                              >
                                <Eye size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-display font-semibold text-2xl text-ink">Inventory</h2>
                  <button
                    onClick={fetchProducts}
                    disabled={loadingProducts}
                    className="p-2 bg-sand text-ink/70 hover:text-ink rounded-full transition-colors disabled:opacity-50"
                  >
                    <RefreshCw size={16} className={loadingProducts ? "animate-spin" : ""} />
                  </button>
                </div>

                {loadingProducts ? (
                  <p className="text-sm text-ink/50 font-mono">Loading inventory...</p>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white/40">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-sand/65 border-b border-ink/10 font-mono text-[10px] text-ink/60 uppercase">
                          <th className="p-4">Product Name</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Price</th>
                          <th className="p-4">Stock Status</th>
                          <th className="p-4">Manage Stock</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/10 text-sm">
                        {products.map((p) => (
                          <tr key={p.slug} className="hover:bg-sand/20">
                            <td className="p-4">
                              <p className="font-semibold text-ink">{p.name}</p>
                              <p className="text-xs text-ink/50 font-mono">{p.slug}</p>
                            </td>
                            <td className="p-4 text-ink/75">{p.category}</td>
                            <td className="p-4 font-mono font-semibold">{formatPrice(p.price)}</td>
                            <td className="p-4">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-semibold border ${
                                  p.stock > 5
                                    ? "bg-teal/10 border-teal/20 text-teal"
                                    : p.stock > 0
                                    ? "bg-marigold/10 border-marigold/20 text-marigold-dark"
                                    : "bg-brick/10 border-brick/20 text-brick"
                                }`}
                              >
                                {p.stock > 0 ? `${p.stock} left` : "Out of stock"}
                              </span>
                            </td>
                            <td className="p-4">
                              {editingStockSlug === p.slug ? (
                                <div className="flex items-center gap-2">
                                  <input
                                    type="number"
                                    min="0"
                                    className="w-20 px-2 py-1 rounded border border-ink/20 focus:outline-none focus:ring-1 focus:ring-teal font-mono text-sm"
                                    value={editingStockVal}
                                    onChange={(e) => setEditingStockVal(parseInt(e.target.value) || 0)}
                                  />
                                  <button
                                    onClick={() => saveStockUpdate(p.slug)}
                                    className="p-1.5 bg-teal text-stone rounded-lg hover:bg-teal/90 transition-colors"
                                  >
                                    <Check size={14} />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => {
                                    setEditingStockSlug(p.slug);
                                    setEditingStockVal(p.stock);
                                  }}
                                  className="text-xs font-semibold text-teal hover:underline text-left"
                                >
                                  Edit Stock
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>

        {/* Order Details Drawer Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-ink/30 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-stone w-full max-w-md h-full p-6 sm:p-8 overflow-y-auto border-l border-ink/15 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-ink/10 pb-4 mb-6">
                  <h3 className="font-display font-semibold text-xl text-ink">Order Details</h3>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-ink/50 hover:text-ink font-mono text-xs uppercase"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-6 text-sm">
                  {/* Status updates */}
                  <div className="bg-sand p-4 rounded-xl space-y-3">
                    <p className="font-mono text-[10px] uppercase text-ink/50 tracking-wider">
                      Management
                    </p>

                    <div>
                      <label className="block text-xs font-semibold text-ink/75 mb-1.5">
                        Order Status
                      </label>
                      <select
                        disabled={updatingRef === selectedOrder.reference}
                        value={selectedOrder.order_status}
                        onChange={(e) => updateOrderStatus(selectedOrder.reference, e.target.value)}
                        className="w-full bg-white text-ink border border-ink/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="placed">Placed</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink/75 mb-1.5">
                        Payment Status
                      </label>
                      <select
                        disabled={updatingRef === selectedOrder.reference}
                        value={selectedOrder.payment_status}
                        onChange={(e) => updatePaymentStatus(selectedOrder.reference, e.target.value)}
                        className="w-full bg-white text-ink border border-ink/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="failed">Failed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] uppercase text-ink/50 tracking-wider mb-2">
                      Customer Information
                    </h4>
                    <p className="font-semibold text-ink">{selectedOrder.customer_name}</p>
                    <p className="text-ink/75">{selectedOrder.customer_email}</p>
                    <p className="text-ink/75 font-mono">{selectedOrder.customer_phone}</p>
                    <p className="mt-2 text-xs bg-white/40 p-3 rounded-lg border border-ink/10 leading-relaxed text-ink/80">
                      {selectedOrder.delivery_address}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] uppercase text-ink/50 tracking-wider mb-2">
                      Purchased Items
                    </h4>
                    <ul className="divide-y divide-ink/5 border border-ink/5 rounded-xl bg-white/30 p-3">
                      {selectedOrder.items.map((item) => (
                        <li key={item.slug} className="py-2.5 flex justify-between">
                          <div>
                            <p className="font-medium text-ink">{item.name}</p>
                            <p className="text-xs text-ink/50 font-mono">
                              {formatPrice(item.price)} &times; {item.quantity}
                            </p>
                          </div>
                          <span className="font-mono font-semibold text-ink">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] uppercase text-ink/50 tracking-wider mb-2">
                      Totals
                    </h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-ink/70">
                        <span>Subtotal</span>
                        <span className="font-mono">{formatPrice(selectedOrder.subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-ink/70">
                        <span>Delivery</span>
                        <span className="font-mono">{formatPrice(selectedOrder.delivery_fee)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-ink border-t border-ink/5 pt-2 text-base">
                        <span>Total</span>
                        <span className="font-mono">{formatPrice(selectedOrder.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-ink/10 pt-4 mt-6 text-xs text-ink/50 font-mono text-center">
                Ref: {selectedOrder.reference}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
