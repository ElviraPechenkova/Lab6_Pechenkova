<template>
  <div class="dish" v-if="selectedDish">
    <div class="dish-grid">
      <!-- Перша сітка: фото страви та її опис -->
      <div class="dish-info">
        <div class="col">
          <h2>{{ selectedDish.name }}</h2>
          <h4>Опис страви</h4>
          <p>{{ selectedDish.description }}</p>
          <h4>Ціна: {{ selectedDish.price }} грн</h4>
        </div>
        <div class="col">
          <button @click="addToOrder">Додати до замовлення</button>
          <img :src="selectedDish.imageUrl || 'https://via.placeholder.com/300'" alt="Фото страви" />
        </div>
      </div>
    </div>
  </div>

  <!-- Якщо страва не знайдена -->
  <div v-else>
    <h3>Страву не знайдено</h3>
    <p>Перевірте правильність посилання або поверніться на головну сторінку меню.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDishesStore } from "@/stores/dishes";
import { useRoute, useRouter } from "vue-router";

const dishesStore = useDishesStore();
const route = useRoute();
const router = useRouter();

// Отримуємо вибрану страву за її ID або name
const selectedDish = computed(() => {
  return dishesStore.featuredDishes?.find(
    (item) => item.id === Number(route.params.id) || item.name === route.params.name
  );
});

// Додаємо страву до замовлення
const addToOrder = () => {
  if (selectedDish.value) {
    dishesStore.addToOrder(selectedDish.value); // Додаємо страву до замовлення
    router.push({ name: 'OrderView' }); // Перехід на сторінку замовлення
  } else {
    console.log('Страва не знайдена');
  }
};
</script>

<style scoped>
.dish {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.dish-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 20px;
}

.dish-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.dish-info .col img {
  width: 100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.dish-info .col h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
}

button {
  background-color: #8b0000;
  border: 2px solid #8b0000;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: white;
  color: #8b0000;
}
</style>
