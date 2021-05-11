<template>
  <el-table :data="tableData" @row-click="click">
    <el-table-column prop="date" label="日期" width="180px"></el-table-column>
    <el-table-column prop="doctor" label="诊断医师"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "RecordList",
  data () {
    return {
      tableData: [
        {
          'date': '2020-03-27',
          'doctor': '张三'
        },
        {
          'date': '2021-03-05',
          'doctor': '李四'
        }
      ]
    }
  },
  created() {
    let params = {
      'patient_id': 1
    };
    this.$axios({
      method: 'get',
      url: '/api/basic/records',
      params: params
    }).then(res => {
      this.tableData = res.data.records
    })
  },
  methods: {
    click(row) {
      sessionStorage.setItem('patient_id', 1)
      this.$router.push({
        name: 'Check',
        params: {
          date: row.date,
          patient_id: sessionStorage.getItem('patient_id')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>