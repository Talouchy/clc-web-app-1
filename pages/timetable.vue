<template>
  <v-layout wrap>
    <v-flex
      xs12
      class="mb-3"
    >
      <v-sheet height="430">
        <v-calendar
          ref="calendar"
          :weekdays="weekdays"
          type="week"
          color="primary"
          first-interval="6"
          interval-count="17"
        />
        
        
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<style>
.v-calendar-daily_head-day-label {
  display: none;
}

.v-calendar-daily_head-weekday {
  font-size: 16px;
  font-weight: 500;
}
</style>
