
import { useState } from "react"
import React from 'react'


const cardsData = [
  {
    title: "Fix login bug",
    description: "Users are unable to log in using their email credentials after the latest update.",
    priority: "High"
  },
  {
    title: "Update landing page",
    description: "Redesign the hero section of the homepage to improve conversion rates.",
    priority: "Medium"
  },
  {
    title: "Write unit tests",
    description: "Add unit tests for the new payment module.",
    priority: "Low"
  },
  {
    title: "Database optimization",
    description: "Optimize SQL queries to reduce load times on the dashboard.",
    priority: "High"
  },
  {
    title: "Team meeting",
    description: "Schedule a sprint planning meeting with the dev team.",
    priority: "Medium"
  },
  {
    title: "Create onboarding guide",
    description: "Draft an onboarding document for new engineering hires.",
    priority: "Low"
  },
  {
    title: "Fix mobile layout",
    description: "Correct layout issues on the iPhone Safari browser.",
    priority: "High"
  }
];

const Card = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.priority}</div>
    </div>

  )
}


const App = () => {

  const [selectedCard, setSelectedCard] = useState(false)

  const handleClick = (card) => {
    setSelectedCard(selectedCard)
  }

  return (
    <div>
      <Card
        key={index}
        title={card.title}
        description={card.description}
        priority={card.priority}

      />
      {cardsData.map((card, index) => {
        console.log(card.title);
        return (
          <div key={index}>
            <div>{card.title}</div>
            <div>{card.description}</div>
            <div>{card.priority}</div>
          </div>
        )
      })}
    </div>
  )
}

export default App














// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// // Create a counter that displays the counter: 2 buttons, 1 for the increment and 1 for the decrement
// // Clicking on the increment increased the counter by 1: clicking on th decrement decreases the counter by 1
// // Counter should not go below zero

// // Optional task: combine 2 functions into 1

// // 

// function App() {
//   const [count, setCount] = useState(0)
//   console.log(count);

//   const increment = () => {
//     setCount(count + 1)
//   }
//   const decrement = () => {
//     // setCount(count - 1)
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }

//   return (
//     <>
//       <div>
//         <h1>Current Counter</h1>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//         {count}
//       </div>
//     </>
//   )
// }

// export default App

