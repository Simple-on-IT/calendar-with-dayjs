import React from 'react';
import './App.css'; // Подключение CSS файла
import Calendar from '@/shared/ui/Calendar/Calendar';

// useMemo не используем, дабы не усложнять задачу
const App: React.FC = () => {

  return (
    <div>
      <h1>Календарь</h1>
      <Calendar />
    </div>
  );
};

export default App;
