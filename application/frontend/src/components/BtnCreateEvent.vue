<template>
  <div>
    <v-btn class="create-btn" icon aria-label="Create Event" disabled>
      <v-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </v-icon>
    </v-btn>
  </div>
</template>
<style scoped lang="scss">
.create-btn {
  position: fixed;
  bottom: 40px;
  left: 80%;
  border-radius: 25%;
}

@media only screen and (min-width: 600px) {
  .create-btn {
    display: none;
  }
}
</style>
