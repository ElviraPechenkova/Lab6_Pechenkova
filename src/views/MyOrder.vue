<template>
  <div class="order-container">
    <h2>Ваше замовлення</h2>

    <!-- Перевірка на наявність страв у замовленні -->
    <div v-if="orderedDishes.length > 0">
      <div v-for="dish in orderedDishes" :key="dish.name" class="order-card">
        <img :src="dish.imageUrl" alt="Фото страви" class="dish-image" />
        <div class="dish-info">
          <h3>{{ dish.name }}</h3>
          <p>Ціна: {{ dish.price }} грн</p>
        </div>
        <!-- Кнопка для видалення страви з замовлення -->
        <button @click="removeFromOrder(dish)" class="remove-button">Видалити</button>
      </div>

      <!-- Кнопка для підтвердження замовлення -->
      <button @click="confirmOrder" class="order-button">Замовити</button>
    </div>
    <div v-else>
      <h3 id="no-dishes">Ваше замовлення порожнє</h3>
      <button @click="router.push({ name: 'Menu' })" class="navigate-button">Переглянути меню</button>
    </div>
  </div>
</template>

<script setup>
import { useDishesStore } from "@/stores/dishes";
import { useRouter } from "vue-router";

const dishesStore = useDishesStore();
const router = useRouter();
const orderedDishes = dishesStore.orderedDishes;

// Метод для підтвердження замовлення
const confirmOrder = () => {
  alert("Наш адміністратор з вами зв'яжеться");
  dishesStore.clearOrder(); // Очищення замовлення після підтвердження
  router.push({ name: 'MainPage' }); // Перехід на головну сторінку після замовлення
};


// Метод для видалення страви з замовлення
const removeFromOrder = (dish) => {
  dishesStore.removeDishFromOrder(dish); // Видалення страви з замовлення
};
</script>

<style scoped>
.order-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 2.3rem;
  color: #000000;
  margin-bottom: 20px;
}

.order-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.dish-image {
  width: 100px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.dish-info h3 {
  font-size: 1.5rem;
  color: #333;
}

.dish-info p {
  font-size: 1.2rem;
  color: #555;
}

.order-button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.order-button:hover {
  background-color: #000000;
}

#no-dishes {
  font-size: 1.5rem;
  color: #777;
  margin-top: 30px;
}

.navigate-button {
  background-color: white;
  border: 2px solid #000000;
  color: #000000;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.navigate-button:hover {
  background-color: #000000;
  color: white;
}

/* Кнопка для видалення страви */
.remove-button {
  background-color: #341c20;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 20px;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #c0392b;
}
</style>
