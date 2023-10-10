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
        <input type="email" placeholder="Enter your email" class="py-2 px-4 border rounded-md focus:ring-2 ring-2 ring-blue-500 w-72" style="appearance: none; width: 100%; height: auto; outline: none; border: none; padding: 16px 16px 16px 24px; border-radius: 58px; font-size: 16px; font-family: Inter, sans-serif; letter-spacing: 0em; line-height: 1em; background: rgb(39, 43, 46); color: rgb(255, 255, 255); box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset;">
        <button @click="handleClick" class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" style="-webkit-appearance:none;appearance:none;width:50%;height:100%;outline:none;border:none;cursor:pointer;padding:15px 25px 15px 25px;border-radius:58px;font-weight:500;font-size:16px;font-family:&quot;Inter-Medium&quot;, &quot;Inter&quot;, sans-serif;font-style:normal;letter-spacing:0em;line-height:1em;background:rgb(255, 255, 255);color:rgb(39,43,46);z-index:1;box-shadow:none;">
          Get updates →
        </button>
      </div>
      <div class="flex justify-center items-center">
        <span class="mt-4 opacity-50 w-100 mx-4">🙋🏻🙋‍♂️🙋🏽‍♀️ Subscribe for the latest Damn-Good Product updates!</span>
      </div>
    </div>
  </div>
</template>