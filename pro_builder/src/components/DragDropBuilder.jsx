import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Block({ id, children }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'block',
    item: { id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  return (
    <div ref={drag} className={`p-4 border rounded ${isDragging ? 'opacity-50' : ''}`}>
      {children}
    </div>
  );
}

function Canvas({ blocks, moveBlock }) {
  const [, drop] = useDrop(() => ({
    accept: 'block',
    drop: (item) => moveBlock(item.id),
  }), [moveBlock]);

  return (
    <div ref={drop} className="h-full overflow-auto p-4 space-y-2">
      {blocks.map((b) => <Block key={b.id} id={b.id}>{b.content}</Block>)}
    </div>
  );
}

function DragDropBuilder({ siteData, onChange }) {
  const moveBlock = (id) => {
    // TODO: implement block reorder
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Canvas blocks={siteData.blocks || []} moveBlock={moveBlock}/>
    </DndProvider>
  );
}

export default DragDropBuilder;
