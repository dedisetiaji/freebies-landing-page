<template lang="pug">
div
  .max-w-5xl.mx-auto
    .grid.grid-cols-2.mx-auto
      .p-10
        h1.text-2xl.font-bold.text-black Want anything to be easy with LaslesVPN.
        .h-10
        p.text-black.text-sm Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
      div
        img(src="@/assets/images/ilustration1.png")
  .h-20
  .grid.grid-cols-3.shadow-md.max-w-4xl.mx-auto
    .grid.grid-cols-2.mx-20
      img.h-12(src="@/assets/images/location.png")
      .grid.grid-rows-2
        div
          p.text-black.font-bold.text-2xl 90+
          p.text-black.text-sm Location
    .grid.grid-cols-2.mx-20
      img.h-12(src="@/assets/images/server.png")
      .grid.grid-rows-2.mx-auto
        div
          p.text-black.font-bold.text-2xl 30+
          p.text-black.text-sm Server
    .grid.grid-cols-2.mx-20
      img.h-12(src="@/assets/images/user.png")
      .grid.grid-rows-2
        div
          p.text-black.font-bold.text-2xl 50+
          p.text-black.text-sm Users
  .h-20
  .flex.max-w-5xl.mx-auto.grid.grid-cols-2
    .max-w-sm
      img(src="@/assets/images/ilustration2.png")
    .max-w-sm
      h1.text-black.font-bold.text-2xl We Provide Many Features You Can Use
      p.text-gray-900.text-md.my-5 You can explore the features that we provide with fun and have their own functions each feature.
        div(class="w-2/3")
          .flex(v-for="list in provider")
            div(class="w-1/5 p-3")
              img(src="@/assets/images/check_round.png")
            div(class="w-4/5 mt-2")
              .text-gray-800.font-light.text-sm.my-2 {{ list }}
  .h-10
  .max-w-5xl.mx-auto.m-20
    h1.text-black.font-bold.text-2xl.text-center Choose Your Plan
    div(class="w-2/5 mx-auto")
      p.text-gray-500.text-sm.text-center Let's choose the package that is best for you and explore it happily and cheerfully.
  .grid.grid-cols-3.max-w-4xl.mx-auto.gap-8
    .p-10.rounded-md.border-2.mx-auto
      img(src="@/assets/images/free.png")
      div
        p.text-black.font-bold.text-2xl.text-center.my-10 Free Plan
        .flex(v-for="list in list.free")
          div(class="w-1/5")
            img(src="@/assets/images/check.png")
          div(class="w-4/5")
            .text-gray-800.font-light.text-sm.my-2 {{ list }}
    .p-10.rounded-md.border-2.mx-auto
      img(src="@/assets/images/free.png")
      div
        p.text-black.font-bold.text-2xl.text-center.my-10 Basic Plan
        .flex(v-for="list in list.standard")
          div(class="w-1/5")
            img(src="@/assets/images/check.png")
          div(class="w-4/5")
            .text-gray-800.font-light.text-sm.my-2 {{ list }}
    .p-10.rounded-md.border-2.mx-auto
      img(src="@/assets/images/free.png")
      div
        p.text-black.font-bold.text-2xl.text-center.my-10 Premium Plan
        .flex(v-for="list in list.premium")
          div(class="w-1/5")
            img(src="@/assets/images/check.png")
          div(class="w-4/5")
            .text-gray-800.font-light.text-sm.my-2 {{ list }}
   
  .w-50.mx-auto.m-20
    p.font-bold.text-black.text-center.text-2xl Huge Global Network of Fast VPN
    p.font-extra-light.text-gray-800.text-center.text-sm.mt-5 See LaslesVPN everywhere to make it easier for you when you move locations.
  .max-w-4xl.mx-auto.m-20
    img(src="@/assets/images/global.png")
    img(src="@/assets/images/sponsored.png")
  .shadow-md.max-w-5xl.mx-auto.p-10.my-10
    .grid.grid-cols-2
      div(class="w-3/5")
        h1.font-bold.text-2xl Subscribe Now for Get Special Features!
        p.text-gray-500.font-light.text-sm.my-5 Let's subscribe with us and find the fun.
  .max-w-5xl.grid.grid-cols-2.p-10.my-10.mx-auto
    .max-w-md
      img(src="@/assets/images/logo.png" class="h-10")
      .text-black.font-normal.my-10 LaslesVPN is a private virtual network that has unique features and has high security.
      .flex
        .grid.grid-cols-3
          div
            img(src="@/assets/images/facebook.png" class="w-20")
          div
            img(src="@/assets/images/twitter.png" class="w-20")
          div
            img(src="@/assets/images/instagram.png" class="w-20")
      .my-5
        .text-gray-500.font-normal.text.sm  ©2020LaslesVPN
    .grid.grid-cols-3.gap-2
      div
        p.font-bold.text-black.product.my-5 Product
        p.text-gray-800.font-light.text-sm.my-2(
          v-for="list in footer.first",
          :key="list"
        ) {{ list }}
      div
        p.font-bold.text-black.product.my-5 Engage
        p.text-gray-800.font-light.text-sm.my-2(
          v-for="list in footer.second",
          :key="list"
        ) {{ list }}
      div
        p.font-bold.text-black.product.my-5 Create Money
          p.text-gray-800.font-light.text-sm.my-2(
            v-for="list in footer.third",
            :key="list"
          ) {{ list }}
</template>
<style scoped>
.check {
  background-color: red;
}
.dua {
  background-color: blue;
}
</style>
<script>
export default {
  data() {
    return {
      provider: [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits.",
      ],
      list: {
        free: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "No Traffic Logs",
          "Works on All Devices",
        ],
        standard: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "No Traffic Logs",
          "Works on All Devices",
          "Connect Anywhere",
        ],
        premium: [
          "Unlimited Bandwitch",
          "Encrypted Connection",
          "No Traffic Logs",
          "Works on All Devices",
          "Connect Anywhere",
          "Get new features",
        ],
      },
      footer: {
        first: [
          "Download",
          "Pricing",
          "Locations",
          "Server",
          "Countries",
          "Blog",
        ],
        second: [
          "Lasles VPN",
          "FAQ",
          "Tutorials",
          "About Us",
          "Privacy Policy",
          "Terms of Service",
        ],
        third: ["Affiliate", "Become Partner"],
      },
    };
  },
};
</script>