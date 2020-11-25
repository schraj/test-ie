<template>
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
        <v-card-title>
            <v-icon
                :color="checking ? 'red lighten-2' : 'indigo'"
                class="mr-5"
                size="64"
            >
                mdi-heart-pulse
            </v-icon>
            <v-layout column align-start>
                <div class="caption grey--text text-uppercase">Heart rate</div>
                <div>
                    <span
                        class="display-2 font-weight-black"
                        v-text="avg || '—'"
                    ></span>
                    <strong v-if="avg">BPM</strong>
                </div>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn icon class="align-self-start" size="28">
                <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
        </v-card-title>

        <v-sheet color="transparent">
            <v-sparkline
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :key="String(avg)"
                auto-draw
                stroke-linecap="round"
            ></v-sparkline>
        </v-sheet>
    </v-card>
</template>
<script>
export default {
  data () {
    return {
      checking: true,
      avg: 1
    }
  }
}
</script>
