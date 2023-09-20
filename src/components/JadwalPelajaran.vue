<template>
  <v-container>
    <div class="text-center">
      <v-col cols="6">
        <v-select
          v-model="namaSiswa"
          :items="siswas"
          item-text="nama"
          item-value="user"
          label="Select"
          v-on:change="getJadwalPelajaran"
          persistent-hint
          single-line
        ></v-select>
      </v-col>
    </div>
    
    <v-col class="mb-4">
      <v-data-table
        :headers="headers"
        :items="jadwalPelajaran"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-container>
</template>

<script>
// import '../assets/css/table.css';

export default {
  mounted() {
    this.getJadwalPelajaran();
    this.getSiswa();
    this.getNamaHari();
  },
  data() {
    return {
      jadwalPelajaran: [],
      siswas: [],
      namaSiswa: 'bahar', // Inisialisasi dengan salah satu siswa
      namaHari: 'coba',
      headers: [
        {
          text: 'Jam',align: 'center',
          sortable: true,value: 'jam',
        },
        { text: this.namaHari, value: 'pelajaran' },
        { text: 'Besok', value: 'besok' },
      ],
    };
  },
  methods: {
    getJadwalPelajaran() {
      const url = `https://workspace.fatur.my.id/api/jadwal/${this.namaSiswa}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.jadwalPelajaran = data;
        });
    },
    getSiswa() {
      const url = `https://workspace.fatur.my.id/api/listsiswa`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.siswas = data;
        });
    },
    getNamaHari() {
      // Buat array dengan nama-nama hari dalam bahasa Inggris
      const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

      // Dapatkan indeks hari saat ini (0 untuk Minggu, 1 untuk Senin, dst.)
      const dayIndex = new Date().getDay();

      // Dapatkan nama hari dari array
      this.namaHari = dayNames[dayIndex];
    },
  },
};
</script>
