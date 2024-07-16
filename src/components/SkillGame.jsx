import React from 'react'
import { useState, useEffect } from 'react'

// import components
import Loading from './Loading'

// import variables
import { restBase } from '../globals/globalVariables'

const SkillGame = () => {
  const restPath = restBase + 'soo-project-category?_embed&orderby=name&order=asc&per_page=100&ver=2&acf_format=standard'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)
  const [categories, setCategories] = useState([])
  const [openAnswer, setOpenAnswer] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [prevAnswer, setPrevAnswer] = useState(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const addCategories = (name, desc, icon) => {
    const newCategory = {
        name: name,
        desc: desc,
        icon: icon
    }
    setCategories(prevCategory => [...prevCategory, newCategory]);
  }

    const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleRevealButton = () => {
    setOpenAnswer(true)
  }

  const handleDrawAgainButton = () => {
    setOpenAnswer(false);
    let num = getRandomNumber(categories.length);
    while (num === prevAnswer || categories[num]?.name === "Featured") {
      num = getRandomNumber(categories.length);
    }
    setRandomNumber(num);
    setPrevAnswer(num);
  }

  useEffect(() => {
    scrollToTop();
    const fetchData = async () => {
        const response = await fetch(restPath)

        if ( response.ok ) {
            const data = await response.json()
            setData(data)
            setLoadStatus(true)
        } else {
            setLoadStatus(false)
        }
    }
    fetchData()
  }, [restPath])

  useEffect(() => {
    if (isLoaded) {
      restData.forEach(tag => {
        addCategories(tag.name, tag.description, tag.acf.skillset_icons.skillset_icon.url);
      });

      // Set initial random number
      const num = getRandomNumber(restData.length)
      setRandomNumber(num)
      setPrevAnswer(num)
    }
  }, [isLoaded, restData]);

  return (
    <>
    { isLoaded ?
    <>
      <section className="skillgame-board">
        <h2 className="section-top-h1">Can you figure out which skill it is?</h2>
        <div className="game-wrapper">
        <div className="skill-desc-block">
            {randomNumber !== null && categories[randomNumber]?.desc}
        </div>
        {categories.length > 0 && (
        <>
          <div className="answer-block">
            {openAnswer && randomNumber !== null ? (
              <>
              <div className="answer-name">{categories[randomNumber]?.name}</div>
              <img src={categories[randomNumber]?.icon} alt="quiz-answer" />
              </>
            )
            :
            <div className="question-mark">?</div>
            }
          </div>
          <div className="game-buttons">
            <button onClick={handleDrawAgainButton} className="draw-another-button">Draw Another Skill</button>
            {!openAnswer &&
              <button onClick={handleRevealButton} className="reveal-button">Reveal the Answer</button>
            }
          </div>
          <div className="game-extra-info">
            <p>* These skills are coming from my skillset list (WordPress Taxonomies).</p>
          </div>
        </>
        )}
        </div>
      </section>
    </>
    :
    <Loading />
  }
  </>
  )
}

export default SkillGame