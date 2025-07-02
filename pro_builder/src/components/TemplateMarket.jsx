/**
 * Displays available templates from a marketplace.
 * Replace static list with API calls to your template server if needed.
 */
const templates = [
  { id: 'biz-modern', name: 'Modern Business' },
  { id: 'travel-parallax', name: 'Parallax Travel' },
  { id: 'portfolio-minimal', name: 'Minimal Portfolio' },
];

function TemplateMarket({ onSelectTemplate }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Templates</h2>
      <ul className="space-y-2">
        {templates.map((tpl) => (
          <li key={tpl.id}>
            <button
              className="w-full text-left p-2 border rounded hover:bg-gray-200"
              onClick={() => onSelectTemplate(tpl.id)}
            >
              {tpl.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemplateMarket;
