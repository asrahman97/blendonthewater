import React from 'react'

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="menu-section-header">
        <div className="margin-bottom left"></div>
        <h1>Menu</h1>
        <div className="margin-bottom right"></div>
      </div>
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

        {/* <div className="menu-section">
          <h3>Midday Menu</h3>
          <div className="midday-menu-grid-wrapper">
            <div className="menuitem1 menuitem">
              <h3 className="menu-item-title">Pollo a La Plancha</h3>
              <p className="menu-item-desc">Marinated chicken breast, white rice, house beans, maduros, lemon butter sauce.</p>
              <p className="menu-item-price">$21.49</p>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}
