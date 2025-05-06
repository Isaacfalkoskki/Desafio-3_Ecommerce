import React from 'react';
import arrowRight from "./images/arrowRight.png"
import dogPomeranlan from "./images/DogsKnowledge/DogPomeranlan.png"
import dogDiet from "./images/DogsKnowledge/DogDiet.png"
import dogDestroy from "./images/DogsKnowledge/DogDestroy.png"

export default function KnowledgeSection() {
  return (
    <>

    <div style={{
  paddingLeft: "200px",
  paddingTop: "70px",
  paddingRight: "200px"
}}>
    <p style={{
      fontSize: "16px",
      fontWeight: "500",
      paddingBottom: "10px"
    }}>
      You already know ?
    </p>


    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start"
      
    }}>


<div>
    <h2 style={{
      fontSize: "24px",
      fontWeight: "700",
      color: "#003459"
    }}>
      Useful pet knowledge
    </h2>
    </div>

    <div>
    <a href="#" style={{
    textDecoration: "none"
  }}>
    <button style={{
      border: "2px solid #003459",
      padding: "10px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: "500",
      backgroundColor: "transparent",
      borderRadius: "30px",
      cursor: "pointer",
      gap: "10px"
    }}>
      View More
      <img src={arrowRight} style={{
        height: "10px"
      }} />
    </button>
  </a>

    </div>

    </header>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: "500px 500px 500px",
      gap: "20px",
      paddingTop: "40px"
    }}>

<div style={{
  backgroundColor: "#F7F7F7",
  borderRadius: "10px",
}}>
  <img src={dogPomeranlan} style={{
    width: "90%",
    padding: "10px 10px 10px 25px",
    borderRadius: "30px 20px 20px 30px"
  }}/>

  <div style={{
    backgroundColor: "#00A7E7",
    color: "white",
    display: "inline-block",
    padding: "7px 12px",
    marginLeft: "20px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "600"
  }}>Pet knowledge</div>

  <h2 style={{
    fontSize: "20px",
    fontWeight: "700",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px",
  }}>What is a Pomeranian? How to Identify <br /> Pomeranian Dogs</h2>

  <p style={{
    fontSize: "16px",
    fontWeight: "400",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px"
  }}>The Pomeranian, also known as the Pomeranian (Pom <br /> dog), is always in the top of the cutest pets. Not only <br /> that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
</div>

<div style={{
  backgroundColor: "#F7F7F7",
  borderRadius: "10px",
}}>
  <img src={dogDiet} style={{
    width: "90%",
    padding: "10px 10px 10px 25px",
    borderRadius: "30px 20px 20px 30px"
  }}/>
  <div style={{
    backgroundColor: "#00A7E7",
    color: "white",
    display: "inline-block",
    padding: "7px 12px",
    marginLeft: "20px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700"
  }}>Pet knowledge</div>

  <h2 style={{
    fontSize: "20px",
    fontWeight: "700",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px",
  }}>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>

  <p style={{
    fontSize: "16px",
    fontWeight: "400",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px"
  }}>Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</p>
</div>

<div style={{
  backgroundColor: "#F7F7F7",
  borderRadius: "10px",
}}>
  <img src={dogDestroy} style={{
    width: "90%",
    padding: "10px 10px 10px 25px",
    borderRadius: "30px 20px 20px 30px"
  }}/>

  <div style={{
    backgroundColor: "#00A7E7",
    color: "white",
    display: "inline-block",
    padding: "7px 12px",
    marginLeft: "20px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700"
  }}>Pet knowledge</div>

  <h2 style={{
    fontSize: "20px",
    fontWeight: "700",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px",
  }}>Why Dogs Bite and Destroy Furniture and How <br /> to Prevent It Effectively</h2>

  <p style={{
    fontSize: "16px",
    fontWeight: "400",
    paddingLeft: "20px",
    paddingBottom: "10px",
    lineHeight: "25px"
  }}>Dog bites are common during development. However, <br /> no one wants to see their furniture or important items <br /> being bitten by a dog.</p>
</div>






    </div>
    
    
    
    </div>
    </>
  )
}
