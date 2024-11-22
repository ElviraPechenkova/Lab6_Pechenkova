<template>
  <div>
    <!-- Фото ресторану -->
    <div class="restaurant-photos">
      <div class="row">
        <div class="col-md-6">
          <img src="@/assets/mainpage1.avif" alt="Restaurant Interior" class="restaurant-photo" />
        </div>
        <div class="col-md-6">
          <img src="@/assets/mainpage2.avif" alt="Restaurant Cuisine" class="restaurant-photo" />
        </div>
      </div>
    </div>

    <!-- Опис ресторану -->
    <div class="container">
      <div class="row">
        <h1 id="restaurant-name">Gourme Restaurant</h1>
      </div>
    </div>

    <!-- Текст про ресторан під фото -->
    <div class="about-restaurant">
      <h3>Про наш ресторан</h3>
      <p>
        Наш ресторан — це місце, де поєднуються стильний інтер'єр, вишукані страви та неповторна атмосфера. Ми пропонуємо страви з різних кухонь світу, створені з найкращих інгредієнтів, щоб ви могли насолоджуватися не тільки смаком, а й візуальним задоволенням. Завітайте до нас і дізнайтеся, чому наш ресторан — це не просто місце для їжі, а справжній кулінарний досвід.
      </p>
    </div>

    <!-- Кнопка для бронювання столу -->
    <div class="container text-center">
      <button @click="bookTable" class="btn btn-primary">Забронювати стіл</button>
    </div>
  </div>
</template>

<style scoped>
#restaurant-name {
  font-size: 7rem;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 5px;
}

h2 {
  font-size: 2.5rem;
  color: #8B0000;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Стилі для фото ресторану */
.restaurant-photos {
  margin-top: 50px;
}

.restaurant-photo {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

/* Стилі для тексту про ресторан */
.about-restaurant {
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
}

.about-restaurant h3 {
  font-size: 2rem;
  color: #8B0000;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #8B0000;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #B22222;
}

/* Адаптивність */
@media (max-width: 768px) {
  .restaurant-photo {
    margin-bottom: 15px;
  }
  .about-restaurant p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .restaurant-photo {
    width: 100%;
  }
}
/* Додано відступ для кнопки */
.container.text-center {
  margin-top: 100px; /* Відступ для опускання кнопки нижче */
}
</style>
