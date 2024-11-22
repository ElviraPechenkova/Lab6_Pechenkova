import { defineStore } from 'pinia';

export const useDishesStore = defineStore('dishes', {
  state: () => ({
    dishes: [], // Масив для зберігання страв, завантажених з бази даних
    featuredDishes: [ // Популярні страви за замовчуванням
      {
        name: "Паста Карбонара",
        description:
          "Класична італійська паста з беконом, сиром пармезан і соусом на основі яєць.",
        price: 180
      },
      {
        name: "Салат Цезар",
        description:
          "Хрусткий салат з куркою, листям салату ромен, сиром пармезан і соусом Цезар.",
        price: 150
      },
      {
        name: "Стейк Рібай",
        description:
          "Соковитий стейк із мармурової яловичини, приготований на грилі.",
        price: 350
      },
      {
        name: "Суп Том Ям",
        description:
          "Пікантний тайський суп з морепродуктами, грибами, кокосовим молоком та лаймом.",
        price: 200
      },
      {
        name: "Піца Маргарита",
        description:
          "Класична італійська піца з томатним соусом, моцарелою та базиліком.",
        price: 220
      },
      {
        name: "Лазанья",
        description:
          "Італійська лазанья з м'ясним соусом, рікоттою та пармезаном.",
        price: 250
      },
      {
        name: "Рибні такос",
        description:
          "Такос з маринованою рибою, овочами та гострим соусом.",
        price: 180
      },
      {
        name: "Курка в апельсиновому соусі",
        description:
          "Запечена курка з ароматним апельсиновим соусом і пряними спеціями.",
        price: 210
      },
      {
        name: "Гречка з грибами",
        description:
          "Традиційна українська гречка з лісовими грибами та цибулею.",
        price: 120
      }
    ],
    orderedDishes: [] // Масив для замовлених страв
  }),

  actions: {
    // Асинхронний метод для отримання страв з API
    async fetchDishesFromDB() {
      try {
        const response = await fetch('https://example.com/api/dishes'); // Замініть URL на реальний
        if (!response.ok) {
          throw new Error('Помилка при отриманні даних');
        }
        const json = await response.json();
        this.dishes = json; // Оновлюємо масив страв
      } catch (err) {
        console.error("Помилка при завантаженні страв: ", err);
      }
    },

    // Додавання страви до замовлення
    addDishToOrder(dish) {
      if (!this.orderedDishes.some(d => d.name === dish.name)) {
        this.orderedDishes.push(dish);
      } else {
        console.log("Цю страву вже додано до замовлення");
      }
    },

    // Видалення страви з замовлення
    removeDishFromOrder(dish) {
      // Фільтруємо масив orderedDishes, щоб видалити страву за назвою
      this.orderedDishes = this.orderedDishes.filter(d => d.name !== dish.name);
    },

    // Очищення замовлення після підтвердження
    clearOrder() {
      this.orderedDishes = [];
    }
  }
});
