<script setup lang="ts">
import SignWriting from './SignWriting.vue'
import { useAlertStore } from '@/stores/alert'

// Never lets window move its scrollbar
function disableScroll() {
  const scrollTop = document.documentElement.scrollTop
  const scrollLeft = document.documentElement.scrollLeft

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

// Undo the function blocking the scrollbar
function enableScroll() {
  window.onscroll = function () {}
}

// Once the close button is hit, toggles between the functions
if (useAlertStore().onHold) {
  disableScroll()
} else {
  enableScroll()
}
</script>
<template>
  <v-alert type="info" closable class="alert" variant="elevated" v-model="useAlertStore().onHold">
    <template v-slot:close>
      <div class="close-btn" @click.stop="useAlertStore().showOnHold()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
    </template>

    <h2>Andamento do Projeto: Paralizado</h2>

    <p>
      O desenvolvedor responsável está estudando o sistema por trás do SignPuddle a fim de melhorar
      a experiência desta aplicação.
    </p>
    <v-divider class="divider" :thickness="3"></v-divider>

    <h2>Project Status: On hold.</h2>

    <p>
      To improve this website experience, the developer is studying how the system behind SignPuddle
      works.
    </p>
    <v-divider class="divider" :thickness="3"></v-divider>
    <div class="sw">
      <!-- Projeto -->
      <SignWriting
        class="sign"
        :sign="'M523x535S21414478x519S14012487x466S20e00482x493S22c04507x493S15a20496x497'"
        :width="40"
        :height="60"
        :display="true"
      />
      <!-- Parado -->
      <SignWriting
        class="sign"
        :sign="'M523x520S37700498x495S37806477x498S20322492x481S20356508x491S20500486x502'"
        :width="40"
        :height="35"
        :display="true"
      />
      <br />
      <!-- Por quê? -->
      <SignWriting
        class="sign"
        :sign="'M518x576S30c00482x483S34d10498x507S10041483x546S10049468x546S22800496x471S20600475x530'"
        :width="40"
        :height="70"
        :display="true"
      />
      <!-- = -->
      <SignWriting class="sign" :sign="'S38a00464x490'" :width="40" :height="15" :display="true" />
      <!-- Pessoa -->
      <SignWriting
        class="sign"
        :sign="'M529x518S30000482x483S1c502480x453S26506514x457S21100515x474'"
        :width="40"
        :height="50"
        :display="true"
      />
      <!-- Desenvolvedora -->
      <SignWriting
        class="sign mb-1-5"
        :sign="'M523x525S15a18477x498S19c02494x496S20600488x475'"
        :width="40"
        :height="40"
        :display="true"
      />
      <!-- Signwriting -->
      <SignWriting
        class="sign mb-1"
        :sign="'M516x549S15a36485x452S15a36485x495S2ea0a490x534S14c50492x500S1f750492x461'"
        :width="25"
        :height="80"
        :display="true"
      />
      <!-- Por trás -->
      <SignWriting
        class="sign mb-1"
        :sign="'M527x525S15a20499x475S15a22500x509S21414475x517S20600473x500'"
        :width="40"
        :height="37"
        :display="true"
      />
      <!-- Sistema -->
      <SignWriting
        class="sign mb-1"
        :sign="'M543x516S20320485x485S20320501x485S23c04520x488S23c1c458x489'"
        :width="60"
        :height="25"
        :display="true"
      />
      <!-- Estudar -->
      <SignWriting
        class="sign"
        :sign="'AS15a31S15a37S20600M525x515S15a37476x485S15a31486x492S20600503x488'"
        :width="40"
        :height="35"
        :display="true"
      />
      <!-- Futuro -->
      <SignWriting
        class="sign"
        :sign="'M517x531S1d210488x503S2b700484x470'"
        :width="30"
        :height="50"
        :display="true"
      />
      <!-- Website -->
      <SignWriting
        class="sign mb-1"
        :sign="'M533x516S18720468x485S29406489x500'"
        :width="40"
        :height="20"
        :display="true"
      />
      <!-- Melhor -->
      <SignWriting
        class="sign"
        :sign="'M524x599S33e00482x483S1f502476x564S1f502508x563S22b00508x526S22b10478x527S2fb04492x593'"
        :width="40"
        :height="80"
        :display="true"
      />
    </div>
  </v-alert>
</template>
<style scoped lang="scss">
.alert {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .close-btn:hover {
    cursor: pointer;
  }

  .divider {
    margin: 1.5rem 0;
  }

  .sw {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 20rem;
    width: 15rem;

    .sign:not(:last-child) {
      margin-bottom: 0.7rem;
    }

    .mb-1-5 {
      margin-bottom: 1.5rem !important;
    }

    .mb-1 {
      margin-bottom: 1rem !important;
    }
  }
}
</style>
