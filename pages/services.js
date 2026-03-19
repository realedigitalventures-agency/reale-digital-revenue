export default function Services() {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">Our Services</h1>
      <ul className="grid md:grid-cols-3 gap-8">
        <li className="p-6 bg-white rounded shadow">Local SEO & Google Maps</li>
        <li className="p-6 bg-white rounded shadow">Paid Ads & Retargeting</li>
        <li className="p-6 bg-white rounded shadow">AI-Powered Follow-Ups</li>
      </ul>
    </div>
  );
}