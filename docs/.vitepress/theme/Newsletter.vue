<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

async function subscribe(email: string) {
  const response = await fetch(`https://newsletter-api.fndx.app/subscribe?mail=${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  const data = await response.json();
  if (data.code === 200) {
    return true;
  } else {
    return false;
  }
}

const handleClick = async () => {
  // 发送 put请求到 fndx-newsletter.auv1107.workers.dev/subscribe?mail=xxx
  // 获取 input 的值
  const email = document.querySelector('input')?.value
  if (email) {
    if (await subscribe(email)) {
      alert('订阅成功！')
    }
  } else {
    alert('email 为空')
  }
}

</script>

<template>
  <div class="flex justify-center items-center pb-8">
    <div>
      <input type="email" placeholder="输入邮箱地址" class="py-2 px-4 border border-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      <button @click="handleClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
        Subscribe
      </button>
    </div>
  </div>
</template>