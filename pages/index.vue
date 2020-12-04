<template lang="pug">
  div
    div(class="max-w-5xl mx-auto")
      div(class="grid grid-cols-2 mx-auto")
        div(class="p-10")
          h1(class="text-2xl font-bold text-black") Want anything to be easy with LaslesVPN.
          div(class="h-10")
          p(class="text-black text-sm") Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        div
          img(src="@/assets/images/ilustration1.png")
    div(class="h-20")
    div(class="grid grid-cols-3 shadow-md max-w-4xl mx-auto")
      div(class="grid grid-cols-2 mx-20")
        img(src="@/assets/images/location.png" class="h-12")
        div(class="grid grid-rows-2")
          div
            p(class="text-black font-bold text-2xl") 90+
            p(class="text-black  text-sm") Location
      div(class="grid grid-cols-2 mx-20")
        img(src="@/assets/images/server.png" class="h-12")
        div(class="grid grid-rows-2 mx-auto")
          div
            p(class="text-black font-bold text-2xl") 30+
            p(class="text-black  text-sm") Server
      div(class="grid grid-cols-2 mx-20")
        img(src="@/assets/images/user.png" class="h-12")
        div(class="grid grid-rows-2")
          div
            p(class="text-black font-bold text-2xl") 50+
            p(class="text-black  text-sm") Users
    div(class="h-20")
    div(class="flex max-w-5xl mx-auto grid grid-cols-2")
      div(class="max-w-sm")
        img(src="@/assets/images/ilustration2.png" )
      div(class="max-w-sm")
        h1(class="text-black font-bold text-2xl") We Provide Many Features You Can Use
        p(class="text-gray-900 text-md my-5") You can explore the features that we provide with fun and have their own functions each feature.
         p(v-for="list in provider" :key="list" class="text-gray-800 font-light text-sm my-2") {{list}}
    div(class="h-10")
    div(class="max-w-5xl mx-auto m-20")
      h1(class="text-black font-bold text-2xl text-center") Choose Your Plan
      p(class="text-gray-500 text-sm text-center") Let's choose the package that is best for you and explore it happily and cheerfully.
    div(class="grid grid-cols-3 max-w-4xl mx-auto gap-8")
      div(class="p-10 rounded-md border-2 mx-auto")
        img(src="@/assets/images/free.png")
        div
          p(class="text-black font-bold text-2xl text-center my-10") Free Plan
          p(v-for="list in list.free" :key="list" class="text-gray-800 font-light text-md my-2") {{list}}
      div(class="p-10 rounded-md border-2 mx-auto")
        img(src="@/assets/images/free.png")
        div
          p(class="text-black font-bold text-2xl text-center my-10") Standard Plan
          p(v-for="list in list.standard" :key="list" class="text-gray-800 font-light text-md my-2") {{list}}
      div(class="p-10 rounded-md border-2 mx-auto")
        img(src="@/assets/images/free.png")
        div
          p(class="text-black font-bold text-2xl text-center my-10") Premium Plan
          p(v-for="list in list.premium" :key="list" class="text-gray-800 font-light text-md my-2") {{list}}
    div(class="w-50 mx-auto m-20")
      p(class="font-bold text-black text-center text-2xl") Huge Global Network of Fast VPN
      p(class="font-extra-light text-gray-500 text-center text-sm mt-5") See LaslesVPN everywhere to make it easier for you when you move locations.
    div(class="max-w-4xl mx-auto m-20")
      img(src="@/assets/images/global.png")
      img(src="@/assets/images/sponsored.png")
    div(class="shadow-md max-w-5xl mx-auto p-10 my-10")
      div(class="grid grid-cols-2")
        div(class="w-3/5")
          h1(class="font-bold text-2xl ") Subscribe Now for Get Special Features!
          p(class="text-gray-500 font-light text-sm my-5") Let's subscribe with us and find the fun.

</template>
<script>
export default {
  data()
  {
    return{
      provider:["Powerfull online protection.","Internet without borders.","Supercharged VPN","No specific time limits."],
      list:
      {
        free:["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices"],
        standard:["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices","Connect Anywhere"],
        premium:["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices","Connect Anywhere", "Get new features"],
      }
    }
  }
}
</script>