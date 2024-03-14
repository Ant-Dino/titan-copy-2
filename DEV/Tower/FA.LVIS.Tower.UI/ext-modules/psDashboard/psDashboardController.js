import React, { useState, useEffect } from 'react';
import PsDashboardTemplate from './psDashboardTemplate';

const DashboardComponent: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [widgetMarkups, setWidgetMarkups] = useState<string[]>([]);
  const [gridsterOptions, setGridsterOptions] = useState<object>({});

  useEffect(() => {
    // Simulate fetching data
    setTitle('Dashboard Title');
    setWidgetMarkups(['<div>Widget 1</div>', '<div>Widget 2</div>']);
    setGridsterOptions({
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
    });
    // This would be replaced by actual fetch calls or similar async tasks
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <PsDashboardTemplate title={title} widgets={widgetMarkups} options={gridsterOptions} />
  );
};

export default DashboardComponent;