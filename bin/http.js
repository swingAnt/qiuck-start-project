// 引入axios
const axios = require('axios');

axios.interceptors.response.use((res) => {
  return res.data;
});

// 获取git上的项目列表
async function getRepolist() {
  return axios.get('https://api.github.com/orgs/yuan-cli/repos');
}
const promptTypeList = [
        {
            name: 'react的业务脚手架',
            url: 'direct:https://github.com/swingAnt/react-project.git#main', //仓库地址

        },
        {
            name: '小程序',
            url: "github:swingAnt/react-project", //仓库地址
        },
]

module.exports = {
  getRepolist,promptTypeList
};