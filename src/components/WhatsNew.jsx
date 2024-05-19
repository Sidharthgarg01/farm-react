import React from 'react'

const WhatsNew = () => {
  return (
    <section className='whats-new'>
        <h4>ready for</h4>
        <h2>what's new</h2>
        <div className="cards">
            <div className="card">
                <div className="image">
                    <img src="/vegetables.jpg" alt="vegetables" />
                </div>
                <div className="title">green vegetables pack</div>
                <div className="price">$12.99</div>
            </div>
            <div className="card">
                <div className="image">
                    <img src="/fruits.jpg" alt="vegetables" />
                </div>
                <div className="title">fruits cart pack</div>
                <div className="price">$12.99</div>
            </div>
            <div className="card">
                <div className="image">
                    <img src="/oranges.jpg" alt="vegetables" />
                </div>
                <div className="title">lemon and oranges pack</div>
                <div className="price"></div>
            </div>
        </div>
        <div className="dots-container">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
        </div>
    </section>
  )
}



export default WhatsNew
