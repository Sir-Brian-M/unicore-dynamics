import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Truck, Shield, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Delivery Zones & Rates",
  description: "Check delivery zones, rates and schedules for Unicore Dynamics across Nairobi, Thika, and the rest of Kenya.",
};

const ZONES = [
  {
    name: "Nairobi & Thika Core",
    price: "KSh 350",
    time: "Same Day (Order before 2 PM)",
    desc: "Direct rider delivery to your doorstep in Nairobi CBD, Westlands, Kilimani, Thika Town, and immediate environs.",
  },
  {
    name: "Kiambu & Outer Nairobi",
    price: "KSh 450",
    time: "Next Day Delivery",
    desc: "Areas including Ruiru, Kiambu Town, Kikuyu, Ngong, Karen, Athi River, Syokimau, and Kitengela.",
  },
  {
    name: "Major Towns (Upcountry)",
    price: "KSh 600",
    time: "2 - 3 Business Days",
    desc: "Mombasa, Kisumu, Nakuru, Eldoret, Nyeri, Meru, Kakamega, Kisii, Kericho, and other major urban centers.",
  },
  {
    name: "Rest of Kenya",
    price: "KSh 750",
    time: "3 - 5 Business Days",
    desc: "Remote locations and locations requiring specialized transit partner services.",
  },
];

export default function DeliveryZonesPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Shipping & Logistics
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Delivery Zones & Rates
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            We deliver heavy baby gear, furniture, and essentials safely and quickly right to your doorstep. Here is how our shipping zones and charges work.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Clock className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Same Day Delivery</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Order before 2:00 PM on weekdays and Saturdays for delivery to your doorstep on the very same day.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Shield className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Safe Packaging</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              All items are heavily padded and double-boxed to ensure they survive road transport in pristine condition.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <MapPin className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Tracked Delivery</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              You will receive SMS alerts detailing order updates and courier contact information for easy tracking.
            </p>
          </div>
        </div>

        {/* Zones Table */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
            Shipping Rates by Location
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ZONES.map((zone) => (
              <div
                key={zone.name}
                className="rounded-2xl border border-ink/10 bg-white/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-ink text-lg">{zone.name}</h3>
                    <span className="font-mono text-lg font-bold text-teal whitespace-nowrap">
                      {zone.price}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-marigold uppercase tracking-wider">
                    {zone.time}
                  </p>
                  <p className="mt-4 text-sm text-ink/75 leading-relaxed">{zone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
