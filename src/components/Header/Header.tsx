import React, { useEffect, useState } from "react"
import "./styles.scss"

const Header = () => {
  const [greetText, setGreetText] = useState("")
  const [locale, setLocale] = useState("")

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        setLocale(data.country_code === "BG" ? "bg-BG" : data.country_code)
      } catch (error) {
        console.error("Error fetching locale:", error)
      }
    }

    fetchLocale()

    const getGreeting = () => {
      const currentHour = new Date().getHours()
      if (currentHour < 12) return locale === "bg-BG" ? "Добро утро!" : "Good Morning!"
      else if (currentHour < 18) return locale === "bg-BG" ? "Добър ден!" : "Good Afternoon!"
      else return locale === "bg-BG" ? "Добър вечер!" : "Good Evening!"
    }

    setGreetText(getGreeting())
  }, [locale])

  const currentDate = new Date()
  const date = currentDate.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <header className="header w-100 flex align-center">
      <div className="container w-100">
        <div className="header-content flex align-center justify-between text-white py-3">
          <div className="greetings">
            <h3 className="fw-6">{greetText}</h3>
          </div>
          <div className="date">
            <span className="text-uppercase fs-13 fw-4">{date}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
