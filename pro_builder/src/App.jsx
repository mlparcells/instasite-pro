/**
 * Pro version entry – includes drag‑and‑drop page builder stubs.
 * Extend components in ./components to add more blocks & templates.
 */
import { useState } from 'react';
import DragDropBuilder from './components/DragDropBuilder';
import TemplateMarket from './components/TemplateMarket';

function App() {
  const [siteData, setSiteData] = useState({});
  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 overflow-y-auto bg-gray-100">
        <TemplateMarket onSelectTemplate={(tpl)=>setSiteData({...siteData, template: tpl})}/>
      </div>
      <div className="flex-1">
        <DragDropBuilder siteData={siteData} onChange={setSiteData}/>
      </div>
    </div>
  );
}

export default App;
