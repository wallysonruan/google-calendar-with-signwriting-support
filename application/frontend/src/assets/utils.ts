import type { Ref } from "vue"

/**
 *
 * It's used to trigger a re-rendering of the components by changing their ":key" value.
 * Once the key is changed, Vue will throw away the current component and re-render it. In other words, Vue
 * will instantiate the component again.
 * @tutorial https://michaelnthiessen.com/force-re-render/#key-changing-to-force-a-component-refresh
 *
 * @param componentKey - The ref variable used by the component as its id.
 *
 */
function triggerComponentReRendering(componentKey: Ref<number>): void {
    componentKey.value += 1
  }

export default triggerComponentReRendering