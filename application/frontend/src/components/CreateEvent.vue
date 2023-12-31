<script setup lang="ts">
import type { calendarEventType } from '@/stores/calendarEvents'
import { stores } from '@/stores/stores'
import LanguageDate from './Language/LanguageDate.vue'
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { ref } from 'vue'
import { re } from '@sutton-signwriting/core/fsw'
import SignWriting from './Language/SignWriting.vue'
import triggerComponentReRendering from '@/assets/utils'

const activateEventStore = stores.createEvent()
const calendarEventStore = stores.calendarEvents()
const languageStore = stores.languages()
const reRenderInitialDate = ref<number>(0)
const reRenderFinalDate = ref<number>(0)

let showDatePicker = ref<boolean>(false)
function openOrCloseDatePicker() {
  showDatePicker.value = !showDatePicker.value
}

let date = ref({
  start: [new Date()],
  end: [new Date()]
})

let calendarEvent = ref<calendarEventType>({
  date: new Date(),
  events: [
    {
      pt: '',
      libras: '',
      eng: ''
    }
  ]
})

/**
 * Intermediary function to set the initial date. It is the only way that worked so far.
 * It is called whenever the model used by the date-picker is changed. Once that happens,
 * it'll get the change, i.e., the new value, and pass it to the calendarEvent.date variable.
 *
 * After that, it'll call the function responsible for re-rendering the component used to show
 * the chosen date.
 *
 * @param {any} value - It'll be passed automatically once v-model is called by the component.
 * @returns Nothing.
 */
function setInitialDate(value: any) {
  calendarEvent.value.date = new Date(value)
  triggerComponentReRendering(reRenderInitialDate)
  triggerComponentReRendering(reRenderFinalDate)
}

const fsw_regex = `${re.sort}?(${re.box}${re.coord})?(${re.symbol}(${re.box})?${re.coord})+`
const regex_multiple_fsw_separated_by_empty_spaces_at_the_end = `^${fsw_regex}(\\s*)?((${fsw_regex})?(\\s*)?)*$`

/**
 * REGEX:
 * - ^A?([BLMR][0-9]{3}x[0-9]{3})?(S[123][0-9a-f]{2}[0-5][0-9a-f]([BLMR])?[0-9]{3}x[0-9]{3})+(\s*)?((A?([BLMR][0-9]{3}x[0-9]{3})?(S[123][0-9a-f]{2}[0-5][0-9a-f]([BLMR])?[0-9]{3}x[0-9]{3})+)?(\s*)?)*$
 *
 * The regex expression will look for the caracteristics below:
 *
 * - It must have the exact pattern declared in the regex;
 *    - REGEX: ^[...]$
 *
 * - It must either have a re.sort at the beginning or not;
 *    - REGEX: A? [...]
 *
 * - It must either have a re.box and a re.coord at the beginning or after the re.sort;
 *    - REGEX: [...] ([BLMR][0-9]{3}x[0-9]{3})? [...]
 *
 * - It must have multiple recurrences of the pattern inside the parenthesis;
 *    - REGEX: ([...])+
 *
 * -  It must have either a re.symbol and a re.coord with a re.box between them or not;
 *    - REGEX: [...] S[123][0-9a-f]{2}[0-5][0-9a-f]([BLMR])?[0-9]{3}x[0-9]{3} [...]
 *
 * - It could have one or more empty space at the end;
 *    - REGEX: (\s*)?
 *
 * - It could have multiple recurrences of the pattern SIGN + EMPTY SPACE;
 *    - REGEX: [...]((SIGN)?(EMPTY SPACE)?)*
 *
 * @param fsw - A string to be tested against a regex that will say if it's a valid fsw or not.
 */
function isValidFswString(fsw: string): boolean {
  const regex = new RegExp(regex_multiple_fsw_separated_by_empty_spaces_at_the_end)
  return regex.test(fsw)
}

/**
 *
 * @param milliseconds
 *
 * @returns String formatted as hh:mm.
 *
 * @see https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript
 */
function parseMillisecondsIntoHoursAndMinutes(milliseconds: number): string {
  //Get hours from milliseconds
  var hours = milliseconds / (1000 * 60 * 60)
  var absoluteHours = Math.floor(hours)
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60
  var absoluteMinutes = Math.floor(minutes)
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes

  return h + ':' + m
}

const showSignwritingPreview = ref<boolean>(false)
function showSignWritingComponentPreview(event: InputEvent) {
  const inputLibras = event.target as HTMLInputElement
  const inputLibrasValue = inputLibras.value

  /**
   * If the preview is hidden, it'll be shown, and the preview will be updated.
   */
  if (showSignwritingPreview.value === false) {
    showSignwritingPreview.value = true
    fillSignWritingPreview(inputLibrasValue)
    return
  }

  /**
   * If the input is empty, it'll hide the preview.
   */
  if (inputLibrasValue === '') {
    showSignwritingPreview.value = false
    return
  }

  /**
   * If the input is not empty, it'll update the preview.
   */
  fillSignWritingPreview(inputLibrasValue)
}

/**
 * Libras text: F-S-W WRONG
 */
const DEFAULT_FSW_STRING =
  'M541x533S20322496x482S26606489x517S1d220460x468S18620523x467 M529x520S15a36502x505S20e00488x500S26a02472x493S14030496x480'
const signWritingPreviewSign = ref<string>(DEFAULT_FSW_STRING)
const signwritingPreviewKey = ref<number>(0)
function fillSignWritingPreview(fsw: string) {
  let validFswStrings: string[] = []
  signWritingPreviewSign.value = DEFAULT_FSW_STRING

  if (fsw) {
    fsw.split(' ').forEach((word) => {
      if (isValidFswString(word)) {
        validFswStrings.push(word)
        signWritingPreviewSign.value = validFswStrings.join(' ')
        triggerComponentReRendering(signwritingPreviewKey)
      }
    })
  }
}

/**
 * It's used to save the event in the calendarEventStore.
 *
 * @returns Nothing.
 */
function submit() {
  calendarEventStore.saveCalendarEvent(calendarEvent.value)
  activateEventStore.activateCreateEvent()
}
</script>
<template>
  <div class="container" v-if="activateEventStore.activated">
    <form @submit.prevent="submit()">
      <nav>
        <ul>
          <li>
            <button @click="activateEventStore.activateCreateEvent()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </li>
          <li>
            <button type="submit" class="btn-save">
              <LanguageWrapper
                sign="M546x531S1bb48454x469S1bb40498x503S26602466x514S26616479x478S21b00513x482S21b00454x518S21500530x500"
                portuguese="Salvar"
              />
            </button>
          </li>
        </ul>
      </nav>
      <v-row class="title">
        <h2>
          <LanguageWrapper
            sign="M529x541S24e38507x460S14c20506x500 M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479"
            portuguese="Adicionar título"
          />
        </h2>
      </v-row>
      <!-- INPUT TITLE PT -->
      <v-row class="input">
        <v-col cols="3" class="title">
          <label for="title-pt">
            <LanguageWrapper
              sign="M522x519S15212478x481S22f04486x505S20e00510x493"
              portuguese="Português"
            />
          </label>
        </v-col>
        <v-col cols="9">
          <input
            class="input-title input portuguese"
            type="text"
            name=""
            placeholder=" Escreva aqui"
            id="title-pt"
            required
            v-model="calendarEvent.events[0].pt"
          />
        </v-col>
      </v-row>
      <!-- INPUT TITLE LIBRAS -->
      <v-row class="input">
        <v-col cols="3" class="title">
          <label for="title-libras">
            <LanguageWrapper
              sign="M542x516S14c0a459x493S14c10498x485S2480c526x488"
              portuguese="Libras"
            />
          </label>
        </v-col>
        <v-col cols="9">
          <div class="input-title input libras">
            <input
              id="title-libras"
              type="text"
              name=""
              placeholder=" fsw"
              :pattern="regex_multiple_fsw_separated_by_empty_spaces_at_the_end"
              required
              v-model="calendarEvent.events[0].libras"
              @input="showSignWritingComponentPreview($event as InputEvent)"
            />
            <div class="sw-preview" v-if="showSignwritingPreview" :key="signwritingPreviewKey">
              <SignWriting :fsw="signWritingPreviewSign" :display="true" max-height="10" />
            </div>
          </div>
        </v-col>
      </v-row>
      <!---->
      <v-divider class="divider"></v-divider>
      <!-- INPUT ALL DAY -->
      <v-row class="input">
        <v-col cols="2" class="icon">
          <v-icon class="disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
              />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </v-icon>
        </v-col>
        <v-col cols="8" class="date disabled">
          <LanguageWrapper
            class="date__title"
            sign="M538x537S15a1a511x525S37a06463x530S37903485x489S15a11474x479S28b0a492x463"
            portuguese="Dia inteiro"
          />
        </v-col>
        <v-col cols="2">
          <v-switch hideDetails disabled></v-switch>
        </v-col>
      </v-row>
      <!-- INPUT DAY START -->
      <v-row class="date">
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <button
            class="btn-date"
            type="button"
            @click="openOrCloseDatePicker()"
            :sw="languageStore.libras"
            :key="reRenderInitialDate"
          >
            <LanguageDate :day-number="calendarEvent.date.getDay()" abbreviated />
            <!--  -->
            <span v-if="languageStore.portuguese">, </span>
            <span> &nbsp;{{ calendarEvent.date.getUTCDate() }}&nbsp; </span>
            <!-- -->
            <LanguageDate :month-number="calendarEvent.date.getMonth()" abbreviated lower-case />
            <!--  -->
            <span v-if="languageStore.portuguese"> &nbsp;de&nbsp; </span>
            <!--  -->
            <span>
              {{ calendarEvent.date.getFullYear() }}
            </span>
          </button>
        </v-col>
        <v-col cols="2" class="disabled">
          {{ parseMillisecondsIntoHoursAndMinutes(calendarEvent.date.getMilliseconds()) }}
        </v-col>
      </v-row>
      <!-- INPUT DAY END -->
      <v-row class="disabled">
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <button
            class="disabled btn-date"
            type="button"
            @click="openOrCloseDatePicker()"
            :sw="languageStore.libras"
            disabled
            :key="reRenderFinalDate"
          >
            <LanguageDate :day-number="calendarEvent.date.getDay()" abbreviated />
            <!--  -->
            <span v-if="languageStore.portuguese">, </span>
            <span> &nbsp;{{ calendarEvent.date.getUTCDate() }}&nbsp; </span>
            <!-- -->
            <LanguageDate :month-number="calendarEvent.date.getMonth()" abbreviated lower-case />
            <!--  -->
            <span v-if="languageStore.portuguese"> &nbsp;de&nbsp; </span>
            <!--  -->
            <span>
              {{ calendarEvent.date.getFullYear() }}
            </span>
          </button>
        </v-col>
        <v-col cols="2">
          {{ parseMillisecondsIntoHoursAndMinutes(calendarEvent.date.getMilliseconds()) }}
        </v-col>
      </v-row>
      <!-- TIMEZONE -->
      <v-row class="input">
        <v-col cols="2" class="icon">
          <v-icon class="disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-globe-americas"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"
              />
            </svg>
          </v-icon>
        </v-col>
        <v-col cols="8" class="disabled">
          <button type="button">
            <LanguageWrapper
              portuguese="Horário Padrão de Brasília"
              sign="AS10051S37a0bS20359S20600M527x522S3780b479x492S20359502x478S10051497x496S20600474x486 M585x515S1ee10500x486S1ee18473x486S1f410556x493S1f418415x492S26a06534x488S26a12451x487 M516x523S14750499x477S14758484x477S2eb06484x508"
            />
          </button>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <!---->
      <v-overlay class="overlay" v-model="showDatePicker">
        <v-date-picker
          show-adjacent-months
          v-model="date.start"
          @update:modelValue="setInitialDate"
          :onClick:save="openOrCloseDatePicker"
          :onClick:cancel="openOrCloseDatePicker"
        />
      </v-overlay>
    </form>
  </div>
</template>
<style scoped lang="scss">
.container {
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow: scroll;
  z-index: 1006; // Only 1 digit bigger than the v-app-bar z-index

  form {
    width: 100vw;

    input {
      line-height: 2rem;
      width: 95%;

      &:focus {
        outline: none;
      }
    }

    .input {
      .libras {
        position: relative;
        .sw-preview {
          position: absolute;
          width: 100%;
          overflow: scroll;
          padding: 0.5rem 0;
          background-color: white;
          border: 1px solid gray;
          color: gray;
          z-index: 1; // So it can sit on top of the parents elements.
        }
      }
    }

    nav {
      padding: 0.7rem;
      display: flex;
      justify-content: space-between;

      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;
          width: max-content;
        }
      }

      .btn-save {
        background-color: #154c79;
        border-radius: 20%/50%;
        padding: 0.3rem 0.9rem;
        color: white;
      }
    }

    .divider {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .title {
      place-content: center;
      width: 100%;
    }

    .input {
      width: 100%;
      .title {
        text-align: right;
      }

      .date {
        display: flex;
        align-items: center;
        .date__title {
          text-align: left;
        }
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .disabled {
      color: gray;
      width: 100%;

      &:hover {
        cursor: auto;
      }
    }

    .btn-date {
      display: flex;
      width: max-content;

      &[sw='true'] {
        flex-direction: column;
        align-items: center;

        & *:not(:last-child) {
          margin-bottom: 0.3rem;
        }
      }
    }
  }

  .date {
    width: 100%;
  }
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 600px) {
  .container {
    display: none;
  }
}
</style>
