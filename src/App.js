import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme';
  console.log(theme);
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    console.log(theme);
  }
  return theme;
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  const changeThemeHandler = () => {
    setTheme(() => theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  return <main>
    <nav>
      <div className='nav-center'>
        <h1>overREACTED!</h1>
        <button type='button' className='btn' onClick={changeThemeHandler}>Toggle</button>
      </div>
    </nav>
    <section className='articles'>
      {data.map(item => {
        return <Article key={item.id} {...item} />
      })}
    </section>
  </main>
}

export default App;