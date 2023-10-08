<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import axios from 'axios';

const { Layout } = DefaultTheme

async function subscribe(email: string) {
  try {
    console.log('email', email);
    const response = await axios.post(`https://newsletter-api.fndx.app/subscribe?mail=${email}`, null, {
      // const response = await axios.post(`/helloworld`, null, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT, DELETE',
      'Access-Control-Max-Age': '86400',
      }
    });
    console.log(response);
    if (response.data.code === 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('error');
    console.error(error);
    return false;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const handleClick = async () => {
  // 发送 put请求到 fndx-newsletter.auv1107.workers.dev/subscribe?mail=xxx
  // 获取 input 的值
  const email = document.querySelector('input')?.value
  if (email && isValidEmail(email)) {
    if (await subscribe(email)) {
      console.log('订阅成功！')
      alert('Subscribe Success!')
    } else {
      console.log('订阅失败！')
      alert('Server Error!')
    }
  } else {
    alert('Email is invalid!')
  }
}

</script>

<template>
  <div class="flex justify-center items-center mt-16">
    <div>
      <div class="flex justify-center items-center">
        <input type="email" placeholder="Email Address" class="py-2 px-4 border rounded-md focus:ring-2 ring-2 ring-blue-500 w-72">
        <button @click="handleClick" class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Subscribe
        </button>
      </div>
      <div class="flex justify-center items-center">
        <span class="mt-4 opacity-50 w-100 mx-4">🙋🏻🙋‍♂️🙋🏽‍♀️ Subscribe for the latest Damn-X Product updates!</span>
      </div>
    </div>
  </div>
</template>