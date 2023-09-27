<script setup>
import { ref } from 'vue'
import main_function from './functions'

defineProps({
  homeTeam: String,
  GuestTeam: String,
  home: Array,
  guests: Array,
  searched: false
})

const homeTeam = ref('');
const GuestTeam = ref('');
let home = ref([]);
let guests = ref([]);
let searched = ref(false);
let test = ref([]);

async function setValues(team1, team2) {
  console.log("called!");
  test = await main_function(team1, team2);
  home.value = test[0];
  guests.value = test[1];
  searched.value = true;

  console.log(home.value);
  console.log(guests.value);
  return
}

</script>

<template>
  <div>
    <div v-if="searched == false">
      <input v-model="homeTeam" placeholder="Home Team" />
      <input v-model="GuestTeam" placeholder="Guest Team" />
      <button @click="setValues(homeTeam , GuestTeam)">Get stats</button>
    </div>
    <table class="my-class" v-if="searched == true">
      <caption> H2H {{ home.name }}</caption>
      <tr>
        <th scope="col">Corners</th>
        <th scope="col">Yellow Cards</th>
        <th scope="col">Red Cards</th>
      </tr>
      <tr v-for="i in home.statsH2H" :key="i">
          <td v-if="i[[7]].value != null">{{ i[[7]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[10]].value != null">{{ i[[10]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[11]].value != null">{{ i[[11]].value }}</td>
          <td v-else>0</td>
      </tr>
    </table>
    <table class="my-class" v-if="searched == true">
      <caption> H2H {{ guests.name }}</caption>
      <tr>
        <th scope="col">Corners</th>
        <th scope="col">Yellow Cards</th>
        <th scope="col">Red Cards</th>
      </tr>
      <tr v-for="i in guests.statsH2H" :key="i">
        <td v-if="i[[7]].value != null">{{ i[[7]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[10]].value != null">{{ i[[10]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[11]].value != null">{{ i[[11]].value }}</td>
          <td v-else>0</td>
      </tr>
    </table>
    <table class="my-class" v-if="searched == true">
      <caption> 5 latest {{ home.name }}</caption>
      <tr>
        <th scope="col">Corners</th>
        <th scope="col">Yellow Cards</th>
        <th scope="col">Red Cards</th>
      </tr>
      <tr v-for="i in home.latestStats" :key="i">
        <td v-if="i[[7]].value != null">{{ i[[7]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[10]].value != null">{{ i[[10]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[11]].value != null">{{ i[[11]].value }}</td>
          <td v-else>0</td>
      </tr>
    </table>
    <table class="my-class" v-if="searched == true">
      <caption> 5 latest {{ guests.name }}</caption>
      <tr>
        <th scope="col">Corners</th>
        <th scope="col">Yellow Cards</th>
        <th scope="col">Red Cards</th>
      </tr>
      <tr v-for="i in guests.latestStats" :key="i">
        <td v-if="i[[7]].value != null">{{ i[[7]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[10]].value != null">{{ i[[10]].value }}</td>
          <td v-else>0</td>
          <td v-if="i[[11]].value != null">{{ i[[11]].value }}</td>
          <td v-else>0</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.my-class  {
		overflow: auto;
		width: 100%;
	}
	.my-class table {
		border: 1px solid #DEDEDF;
		height: 100%;
		width: 100%;
		table-layout: auto;
		border-collapse: collapse;
		border-spacing: 1px;
		text-align: center;
	}
	.my-class caption {
		caption-side: top;
		text-align: left;
	}
	.my-class th {
		border: 1px solid #DEDEDF;
		background-color: #ECEFF1;
		color: #000000;
		padding: 1px;
	}
	.my-class td {
		border: 1px solid #DEDEDF;
		background-color: #FFFFFF;
		color: #000000;
		padding: 1px;
	}


</style>
