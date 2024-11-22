<template>
  <div class="content">
    <h2>Меню ресторану</h2>
    <p id="text2">Оберіть улюблену страву!</p>

    <!-- Перевірка на наявність страв -->
    <div v-if="dishesStore.featuredDishes.length > 0" class="dishes-container">
      <div
        class="dish"
        v-for="dish in dishesStore.featuredDishes"
        :key="dish.name"
        @click="viewDishDetails(dish)"
      >
        <!-- Виведення зображення страви -->
        <img :src="dish.imageUrl || 'https://via.placeholder.com/300'" alt="dish image" />
        <div class="dish-details">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <h4>Ціна: {{ dish.price }} грн</h4>
          <!-- Кнопка додавання до замовлення -->
          <button @click="addToOrder(dish)" class="add-to-order-button">
            Додати до замовлення
          </button>
        </div>
      </div>
    </div>

    <!-- Повідомлення про відсутність страв -->
    <div v-else>
      <p>Страви ще не завантажено. Будь ласка, спробуйте пізніше.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useDishesStore } from "@/stores/dishes"; // Оновлено на useDishesStore
import { useRouter } from "vue-router";

const dishesStore = useDishesStore(); // Ініціалізація store для страв
const router = useRouter();

// Додавання страви до замовлення
const addToOrder = (dish) => {
  dishesStore.addDishToOrder(dish); // Додавання страви до замовлення
  router.push({ name: 'MyOrderView' }); // Перехід на сторінку замовлення
};

// Перехід на сторінку деталей страви
const viewDishDetails = (dish) => {
  router.push({ name: 'DishView', params: { id: dish.id } });
};

// Завантаження страв при монтуванні компонента
onMounted(() => {
  dishesStore.fetchDishesFromDB(); // Викликаємо метод для отримання страв
});
</script>

<style scoped>
/* Заголовок сторінки */
h2 {
  font-size: 2.3rem;
  color: #8b0000;
  text-align: center;
  margin: 35px 0 20px;
  text-transform: uppercase;
}

/* Опис сторінки */
#text2 {
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
}

/* Контейнер для страв */
.dishes-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
}

/* Оформлення картки страви */
.dish {
  width: 30%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 20px;
}

/* Зображення страви */
.dish img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Контейнер для деталей страви */
.dish-details {
  padding: 15px;
}

/* Заголовок страви */
.dish h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 10px;
}

.dish p {
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
  margin: 0 0 10px;
}

.dish h4 {
  font-size: 1.1rem;
  color: #8b0000;
  margin: 0;
}

/* Кнопка додавання до замовлення */
.add-to-order-button {
  background-color: #341c20; /* М'який оранжевий колір */
  color: white;
  border: none;
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-to-order-button:hover {
  background-color: #ad5e6b; /* Темніший відтінок оранжевого при наведенні */
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.add-to-order-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Ефект при наведенні */
.dish:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Адаптивний дизайн */
@media (max-width: 768px) {
  .dishes-container {
    justify-content: center;
    gap: 15px;
  }
  .dish {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .dish {
    width: 100%;
  }
}
</style>
