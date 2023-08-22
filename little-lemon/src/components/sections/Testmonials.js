import TestimonialsCard from "../TestimonialsCard";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-container container">
        <h1 className="display-title title">Testimonials</h1>
        <div className="testimonials-cards">
          <TestimonialsCard
            avatar={require("../../assets/sara.png")}
            name="Valeria Lopez"
            media_id="Valeria72"
            text="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/jon.png")}
            name="Vinicio Do"
            media_id="VinicioDo"
            text="“We had such a great time celebrating my grandmothers bitthday!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/Olivia.png")}
            name="Camila Pope"
            media_id="Camila_P"
            text="“Best Feta Salad in town. Flawless everytime!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/deniz.png")}
            name="Fernando Kaplan"
            media_id="Fernando_K123"
            text="“Such a chilled out atmosphere - love it!”"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
