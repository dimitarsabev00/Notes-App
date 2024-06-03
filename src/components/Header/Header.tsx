import React, { useEffect, useState } from "react"
import "./styles.scss"

const Header: React.FC = () => {
  const [greetText, setGreetText] = useState("")
  const [locale, setLocale] = useState("en-US")

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        const fetchedLocale = data.country_code === "BG" ? "bg-BG" : "en-US"
        setLocale(fetchedLocale)
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
  let date

  try {
    date = currentDate.toLocaleDateString(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  } catch (error) {
    console.error("Error formatting date with locale:", error)
    date = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

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
