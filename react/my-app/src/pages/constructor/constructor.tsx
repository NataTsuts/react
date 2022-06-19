import React, {useState} from "react";
import './style.scss'


const Constructor = () => {
  const [isBigSize, setIsBigSize] = useState(false);
const toggleClass = (param: boolean) => {
    setIsBigSize(param);
};

const [isAddBort, setisAddBort] = useState<"" | "cheese" | "sesame" | "meat">('');
const toggleAddBort = (bort: "" | "cheese" | "sesame" | "meat") => {
    setisAddBort(bort)
};

const [isAddBase, setisAddBase] = useState<"" | "tomato" | "creamy" | "garlic">('');
const toggleAddBase = (base: "" | "tomato" | "creamy" | "garlic") => {
    setisAddBase(base)
};

const [isAddMeat, setisAddMeat] = useState<"" | "bacon" | "chicken" | "hunting sausages"| "pepperoni" | "salami" | "ham">('');
const toggleAddMeat = (meat: "" | "bacon" | "chicken" | "hunting sausages"| "pepperoni" | "salami" | "ham") => {
    setisAddMeat(meat)
};

const [isAddCheese, setisAddCheese] = useState<"" | "mozzarella" | "dor-blue" | "royal"| "parmesan" | "feta" >('');
const toggleAddCheese = (cheese: "" | "mozzarella" | "dor-blue" | "royal"| "parmesan" | "feta") => {
    setisAddCheese(cheese)
};

const [isAddFish, setisAddFish] = useState<"" | "crab-sticks" | "salmon" | "tuna" >('');
const toggleAddFish = (fish: "" | "crab-sticks" | "salmon" | "tuna") => {
    setisAddFish(fish)
};

const [isAddVeg, setisAddVeg] = useState<"" | "pepper" | "drained-tomatoes" | "mushrooms" | "corn" | "marinated-cucumber" | "tomatoes"| "onion" | "garlic" | "chile" | "tomatoes-cherry" | "arugula" | "jalapeno" >('');
const toggleAddVeg = (vegetable: "" | "pepper" | "drained-tomatoes" | "mushrooms" | "corn" | "marinated-cucumber" | "tomatoes"| "onion" | "garlic" | "chile" | "tomatoes-cherry" | "arugula" | "jalapeno") => {
    setisAddVeg(vegetable)
};

const [isAddFruit, setisAddFruit] = useState<"" | "pineapple" | "lemon" | "olives" >('');
const toggleAddFruit = (fruit: "" | "pineapple" | "lemon" | "olives" ) => {
    setisAddFruit(fruit)
};

const [isAddSauses, setisAddSauses] = useState<"" | "bbq" | "caesar" | "garlic" >('');
const toggleAddSauses = (sauses: "" | "bbq" | "caesar" | "garlic" ) => {
    setisAddSauses(sauses)
};

  return (
    <div className="constructor">
      <div className="information">
         <img src="https://prontopizza.ua/chernivtsi/wp-content/themes/prontopizza/img/product-default.png" alt=""/>
         <div className="selected-products">
            <h1>Що ви обрали:</h1>
         </div>
         <div className="nutrients">
              <div className="calories">Калорії</div>
              <div className="proteins">Білки</div>
              <div className="fat">Жири</div>
              <div className="carbohydrates">Вуглеводи</div>
         </div>
      </div>
      
      <div className="products">
        <div className="description">
          <h1>Конструктор</h1>
          <h2>Зберіть смачну піцу за власним рецептом з інгредієнтів які ви полюбляєте</h2>
        </div>
      

        <div className='button-size'>
              <button className={isBigSize ? 'btn' : 'btn-select'} onClick={()=>toggleClass(false)}>
                  30 см
              </button>
              <button className={isBigSize ? 'btn-select' : 'btn'} onClick={()=>toggleClass(true)}>
                  40 см
              </button>
         </div>
         <div className='addition'>
                    <div><h3>Бортик:</h3></div>
                    <div className="checkbox" onClick={() => toggleAddBort('sesame')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddBort === "sesame" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span
                            className={isAddBort === "sesame" ? 'name-checkox-select' : 'name-checkox'}>Кунжутний</span>
                    </div>

                    <div className="checkbox" onClick={() => toggleAddBort('cheese')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddBort === "cheese" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span className={isAddBort === "cheese" ? 'name-checkox-select' : 'name-checkox'}>Сирний</span>
                    </div>

                    <div className="checkbox" onClick={() => toggleAddBort('meat')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className={isAddBort === "meat" ? 'bi-circle-select' : 'bi-circle'} viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </svg>

                        <span
                            className={isAddBort === "meat" ? 'name-checkox-select' : 'name-checkox'}>Мисливський</span>
                    </div>
         </div>
         <div className='base'>
                    <div><h3>Основа для піци:</h3></div>
                    <div className="product-card" onClick={() => toggleAddBase('creamy')}>
                        <span
                            className={isAddBase === "creamy" ? 'product-card-select' : 'product-card'}>
                            Вершкова основа
                        </span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddBase('tomato')}>
                        <span className={isAddBase === "tomato" ? 'product-card-select' : 'product-card'}>Томатна основа</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddBase('garlic')}>
                        <span
                            className={isAddBase === "garlic" ? 'product-card-select' : 'product-card'}>Часникова основа</span>
                    </div>
         </div>

         <div className='meat'>
                    <div><h3>М'ясне</h3></div>
                    <div className="product-card" onClick={() => toggleAddMeat('bacon')}>
                        <span
                            className={isAddMeat === "bacon" ? 'product-card-select' : 'product-card'}>Бекон</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddMeat('chicken')}>

                        <span className={isAddMeat === "chicken" ? 'product-card-select' : 'product-card'}>Курка</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddMeat('hunting sausages')}>

                        <span
                            className={isAddMeat === "hunting sausages" ? 'product-card-select' : 'product-card'}>Мисливські ковбаски</span>
                    </div>
                    <div className="product-card" onClick={() => toggleAddMeat('pepperoni')}>
                        <span
                            className={isAddMeat === "pepperoni" ? 'product-card-select' : 'product-card'}>Папероні</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddMeat('salami')}>

                        <span className={isAddMeat === "salami" ? 'product-card-select' : 'product-card'}>Салямі</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddMeat('ham')}>

                        <span
                            className={isAddMeat === "ham" ? 'product-card-select' : 'product-card'}>Шинка</span>
                    </div>
         </div>

         <div className='cheese'>
                    <div><h3>Сири</h3></div>
                    <div className="product-card" onClick={() => toggleAddCheese('mozzarella')}>
                        <span
                            className={isAddCheese === "mozzarella" ? 'product-card-select' : 'product-card'}>Сир Моцарелла</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddCheese('dor-blue')}>

                        <span className={isAddCheese === "dor-blue" ? 'product-card-select' : 'product-card'}>Сир Дор-Блю</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddCheese('royal')}>

                        <span
                            className={isAddCheese === "royal" ? 'product-card-select' : 'product-card'}>Сир Королівський</span>
                    </div>
                    <div className="product-card" onClick={() => toggleAddCheese('parmesan')}>
                        <span
                            className={isAddCheese === "parmesan" ? 'product-card-select' : 'product-card'}>Сир Пармезан</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddCheese('feta')}>

                        <span className={isAddCheese === "feta" ? 'product-card-select' : 'product-card'}>Сир Фета</span>
                    </div>
         </div>

         <div className='fish'>
                    <div><h3>Риба</h3></div>
                    <div className="product-card" onClick={() => toggleAddFish('crab-sticks')}>
                        <span
                            className={isAddFish === "crab-sticks" ? 'product-card-select' : 'product-card'}>Крабові палички</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddFish('salmon')}>

                        <span className={isAddFish === "salmon" ? 'product-card-select' : 'product-card'}>Лосось</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddFish('tuna')}>

                        <span
                            className={isAddFish === "tuna" ? 'product-card-select' : 'product-card'}>Тунець</span>
                    </div>

         </div>

         <div className='vegetables'>
                    <div><h3>Овочі</h3></div>
                    <div className="product-card" onClick={() => toggleAddVeg ('pepper')}>
                        <span
                            className={isAddVeg === "pepper" ? 'product-card-select' : 'product-card'}>Болгарський перець</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('drained-tomatoes')}>

                        <span className={isAddVeg === "drained-tomatoes" ? 'product-card-select' : 'product-card'}>В'ялені помідори</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('mushrooms')}>

                        <span
                            className={isAddVeg === "mushrooms" ? 'product-card-select' : 'product-card'}>Гриби</span>
                    </div>
                    <div className="product-card" onClick={() => toggleAddVeg ('corn')}>
                        <span
                            className={isAddVeg === "corn" ? 'product-card-select' : 'product-card'}>Кукурудза</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('marinated-cucumber')}>

                        <span className={isAddVeg === "marinated-cucumber" ? 'product-card-select' : 'product-card'}>Огірок Маринований</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('tomatoes')}>

                        <span
                            className={isAddVeg === "tomatoes" ? 'product-card-select' : 'product-card'}>Помідори</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('onion')}>
                        <span
                            className={isAddVeg === "onion" ? 'product-card-select' : 'product-card'}>Цибуля</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('garlic')}>

                        <span className={isAddVeg === "garlic" ? 'product-card-select' : 'product-card'}>Часник</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('chile')}>

                        <span
                            className={isAddVeg === "chile" ? 'product-card-select' : 'product-card'}>Чилі</span>
                    </div>
                    <div className="product-card" onClick={() => toggleAddVeg ('tomatoes-cherry')}>
                        <span
                            className={isAddVeg === "tomatoes-cherry" ? 'product-card-select' : 'product-card'}>Помідор Черрі</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('arugula')}>

                        <span className={isAddVeg === "arugula" ? 'product-card-select' : 'product-card'}>Рукола</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddVeg ('jalapeno')}>

                        <span
                            className={isAddVeg === "jalapeno" ? 'product-card-select' : 'product-card'}>Халапеньйо</span>
                    </div>

         </div>

         <div className='fruits'>
                    <div><h3>Фрукти</h3></div>
                    <div className="product-card" onClick={() => toggleAddFruit('pineapple')}>
                        <span
                            className={isAddFruit === "pineapple" ? 'product-card-select' : 'product-card'}>Ананас</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddFruit('lemon')}>

                        <span className={isAddFruit === "lemon" ? 'product-card-select' : 'product-card'}>Лимон</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddFruit('olives')}>

                        <span
                            className={isAddFruit === "olives" ? 'product-card-select' : 'product-card'}>Маслини</span>
                    </div>

         </div>

         <div className='sauces'>
                    <div><h3>Соуси</h3></div>
                    <div className="product-card" onClick={() => toggleAddSauses('bbq')}>
                        <span
                            className={isAddSauses === "bbq" ? 'product-card-select' : 'product-card'}>Соус Барбекю</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddSauses('caesar')}>

                        <span className={isAddSauses === "caesar" ? 'product-card-select' : 'product-card'}>Соус Цезар</span>
                    </div>

                    <div className="product-card" onClick={() => toggleAddSauses('garlic')}>

                        <span
                            className={isAddSauses === "garlic" ? 'product-card-select' : 'product-card'}>Соус Часниковий</span>
                    </div>

         </div>
      </div>
      
    </div>
  )
}

export default Constructor