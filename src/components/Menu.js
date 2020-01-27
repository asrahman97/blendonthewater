import React from 'react'
import Leaf1 from '../assests/leaf1.png'
import Leaf2 from '../assests/leaf2.png'
import Leaf3 from '../assests/leaf3.png'

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="menu-section-header">
        <div className="margin-bottom left"></div>
        <h1>Menu</h1>
        <div className="margin-bottom right"></div>
      </div>
      <img src={Leaf1} className="leaf1"></img>
      <div className="menu-section">
        <h3>Midday Menu</h3>
        <div className="midday-menu-grid-wrapper">
          <div className="menuitem1 menuitem">
            <h3 className="menu-item-title">Pollo a La Plancha</h3>
            <p className="menu-item-desc">Marinated chicken breast, white rice, house beans, maduros, lemon butter sauce.</p>
            <p className="menu-item-price">$21.49</p>
          </div>
          <div className="menuitem2 menuitem">
            <h3 className="menu-item-title">Pescado Encocado</h3>
            <p className="menu-item-desc">Pan seared tilapia, coconut sauce, white rice.</p>
            <p className="menu-item-price">$26.05</p>
          </div>
          <div className="menuitem3 menuitem">
            <h3 className="menu-item-title">Arepas Benedictos</h3>
            <p className="menu-item-desc">Crispy arepas, braised short rib, poached eggs, hollandaise, avocado pico salad.</p>
            <p className="menu-item-price">$19.25</p>
          </div>
          <div className="menuitem4 menuitem">
            <h3 className="menu-item-title">Lime Crusted Atlantic Salmon</h3>
            <p className="menu-item-desc">Cilantro mashed potatoes, asparagus, pineapple reduction.</p>
            <p className="menu-item-price">$30.55</p>
          </div>
          <div className="menuitem5 menuitem">
            <h3 className="menu-item-title">Blend Stuffed Burger</h3>
            <p className="menu-item-desc">Braised short rib, guacamole, pepper jack cheese, bacon, house fries.</p>
            <p className="menu-item-price">$20.39</p>
          </div>
          <div className="menuitem6 menuitem">
            <h3 className="menu-item-title">Filet Mignon</h3>
            <p className="menu-item-desc">Porcini dusted prime beef tenderloin, mangu, sauteed arugula, red wine reduction.</p>
            <p className="menu-item-price">$33.95</p>
          </div>
          <div className="menuitem7 menuitem">
            <h3 className="menu-item-title">Arroz Con Mariscos</h3>
            <p className="menu-item-desc">Shrimp, scallops, mussels, clams, crab meat, saffron scented yellow rice.</p>
            <p className="menu-item-price">$31.69</p>
          </div>
          <div className="menuitem8 menuitem">
            <h3 className="menu-item-title">Salmon Burger</h3>
            <p className="menu-item-desc">Pan seared patty, lime scented creme, strawberry mango salad.</p>
            <p className="menu-item-price">$19.25</p>
          </div>
          <div className="menuitem9 menuitem">
            <h3 className="menu-item-title">Crispy Chicken</h3>
            <p className="menu-item-desc">Crispy pan roasted half chicken, fried rice, avocado salsa, mango Beurre blanc.</p>
            <p className="menu-item-price">$23.79</p>
          </div>
        </div>

        <div className="menu-section">
          <h3>Brunch Menu</h3>
          <div className="midday-menu-grid-wrapper">
            <div className="menuitem1 menuitem">
              <h3 className="menu-item-title">Watermelon Gazpacho</h3>
              <p className="menu-item-desc">Chilled watermelon soup with cucumber, onions, bell pepper with mango pico de gallo.</p>
              <p className="menu-item-price">$9.05</p>
            </div>
            <div className="menuitem2 menuitem">
              <h3 className="menu-item-title">Huevos Rancheros</h3>
              <p className="menu-item-desc">Sunnyside up eggs, black bean puree, chicken and pepper jack cheese quesadilla, sofrito sauce.</p>
              <p className="menu-item-price">$18.10</p>
            </div>
            <div className="menuitem3 menuitem">
              <h3 className="menu-item-title">Arepas Benedictos</h3>
              <p className="menu-item-desc">Crispy arepas, braised short rib, poached eggs, hollandaise, avocado pico salad.</p>
              <p className="menu-item-price">$19.25</p>
            </div>
            <img src={Leaf2} className="leaf2"></img>
            <div className="menuitem4 menuitem">
              <h3 className="menu-item-title">El Caribeno</h3>
              <p className="menu-item-desc">Mangu, salame especial, fried cheese, sunny side eggs, pickled onion, plantain crisps.</p>
              <p className="menu-item-price">$18.10</p>
            </div>
            <div className="menuitem5 menuitem">
              <h3 className="menu-item-title">Chicken Vacafrita</h3>
              <p className="menu-item-desc">Pan seared chicken, caramelized onion, rice, beans and maduros.</p>
              <p className="menu-item-price">$15.85</p>
            </div>
            <div className="menuitem6 menuitem">
              <h3 className="menu-item-title">Mofongo Con Camarones Al Ajillo</h3>
              <p className="menu-item-desc">Smashed plantains, sauteed onion & baby shrimp in a garlic butter sauce.</p>
              <p className="menu-item-price">$16.99</p>
            </div>
            <div className="menuitem7 menuitem">
              <h3 className="menu-item-title">Arroz Y Mariscos</h3>
              <p className="menu-item-desc">Yellow rice with sauteed clams, scallops, shrimp, and crab meat.</p>
              <p className="menu-item-price"></p>
            </div>
            <div className="menuitem8 menuitem">
              <h3 className="menu-item-title">Strawberry & Mango Salad</h3>
              <p className="menu-item-desc">Mixed greens, manchego cheese mango, strawberries, avocado and candied walnuts.</p>
              <p className="menu-item-price">$11.35</p>
            </div>
            <div className="menuitem9 menuitem">
              <h3 className="menu-item-title">Chicken Lomo</h3>
              <p className="menu-item-desc">Pan seared chicken, tomatoes, potatoes, in a light soy on a bed of rice.</p>
              <p className="menu-item-price">$13.59</p>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h3>Dinner Menu</h3>
          <div className="midday-menu-grid-wrapper">
            <div className="menuitem1 menuitem">
              <h3 className="menu-item-title">Chicharron De Pollo Skewers</h3>
              <p className="menu-item-desc">Lightly battered chicken breast, mango Beurre blanc.</p>
              <p className="menu-item-price">$13.59</p>
            </div>
            <div className="menuitem2 menuitem">
              <h3 className="menu-item-title">Guacamole</h3>
              <p className="menu-item-desc">Fresh house made guacamole, cilantro, pico de gallo, served with warm tortilla chips.</p>
              <p className="menu-item-price">$11.35</p>
            </div>
            <div className="menuitem3 menuitem">
              <h3 className="menu-item-title">Chicharron De Pollo Skewers</h3>
              <p className="menu-item-desc">Lightly battered chicken breast, mango Beurre blanc.</p>
              <p className="menu-item-price">$13.59</p>
            </div>
            <div className="menuitem4 menuitem">
              <img src={Leaf3} className="leaf3"></img>
              <h3 className="menu-item-title">Pan Con Mantequilla</h3>
              <p className="menu-item-desc">Herb & cheese focaccia baked in a cast iron skillet served with homemade truffle butter.</p>
              <p className="menu-item-price">$9.05</p>
            </div>
            <div className="menuitem5 menuitem">
              <h3 className="menu-item-title">Chorizo Mac & Cheese</h3>
              <p className="menu-item-desc">Manchego, cojita, pepper jack cheese, chorizo, panko crust.</p>
              <p className="menu-item-price">$13.59</p>
            </div>
            <div className="menuitem6 menuitem">
              <h3 className="menu-item-title">Crispy Arepas - 4 pcs</h3>
              <p className="menu-item-desc">Braised short rib, avocado, lime scented creme, micro cilantro.</p>
              <p className="menu-item-price">$14.75</p>
            </div>
            <div className="menuitem7 menuitem">
              <h3 className="menu-item-title">Churrasco</h3>
              <p className="menu-item-desc">Grilled marinated skirt steak cooked medium, white rice, house beans, tostones, chimichurri, red onion escabeche.</p>
              <p className="menu-item-price">$32.80</p>
            </div>
            <div className="menuitem8 menuitem">
              <h3 className="menu-item-title">Lobster</h3>
              <p className="menu-item-desc">Maine lobster, spicy black bean puree, cherry tomatoes, cilantro aioli, chipotle.</p>
              <p className="menu-item-price">$16.99</p>
            </div>
            <div className="menuitem9 menuitem">
              <h3 className="menu-item-title">Wild Mushroom Cocas</h3>
              <p className="menu-item-desc">Truffle ricotta, assorted wild mushrooms, queso de cabra, truffle essence.</p>
              <p className="menu-item-price">$13.59</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
