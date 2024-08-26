<template>
  <div class="about-us">
    <section class="banner">
      <!-- //<img src="@/assets/about-banner.jpg" alt="About Us Banner" /> -->
      <h1>About Us</h1>
    </section>

    <section class="intro">
      <div class="content">
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          quibusdam. Minus deleniti eligendi illum eaque. Minus aliquid quaerat
          aut quae maxime unde, ipsum iusto sequi fuga nam cum praesentium
          accusamus. Minima, quod odio maiores labore non ducimus aperiam. Unde
          cumque eveniet quasi velit odio eum adipisci modi optio, aut eaque
          iusto architecto magni totam, impedit doloremque, perferendis commodi
          corporis esse? Non, quas cumque placeat, nobis, dolore quo quidem
          repellendus nulla quam accusantium aliquam mollitia provident dolor
          fuga voluptatibus aut dolorum quod perferendis delectus quisquam nihil
          deserunt adipisci vitae et. Maxime. Quas ab tenetur repudiandae neque
          ex maiores veritatis ea laboriosam corrupti delectus eveniet sequi
          modi, non omnis repellat vero rerum eligendi architecto soluta sint
          ipsam! Modi temporibus rem ex alias? Aperiam qui magni animi inventore
          quibusdam repellendus dolor eos iure enim, rerum necessitatibus
          eveniet dicta, debitis quo nesciunt explicabo veritatis officiis ea
          voluptate quos voluptatibus impedit. Quos nulla velit sequi.
        </p>
      </div>
      <!-- <img src="@/assets/who-we-are.jpg" alt="Who We Are" /> -->
    </section>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore enim
        dolores voluptatem! Molestiae amet temporibus eos sapiente reiciendis
        vitae itaque omnis error delectus consectetur, consequuntur, pariatur
        repudiandae totam officiis nemo. Ipsam quasi aliquam minus quas sed,
        nisi tenetur, expedita officia illum veritatis reprehenderit quis fuga
        quisquam alias obcaecati voluptas facilis magnam dolorum accusantium!
        Deleniti molestias sapiente ipsum quasi vel voluptatibus. Culpa,
        consequuntur nemo quod dolore quisquam fuga dolores voluptate nostrum
        perspiciatis in! Odio quisquam quas perspiciatis beatae, voluptas ullam
        atque temporibus molestias, deleniti iste accusamus quasi esse fugiat
        enim vel!
      </p>
    </section>

    <section class="values">
      <h2>Our Values</h2>
      <ul>
        <li>Quality</li>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
      </ul>
    </section>

    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="member" v-for="member in team" :key="member.name">
          <img :src="member.photo" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUs",
  data() {
    return {
      team: [
        {
          name: "John Doe",
          role: "CEO",
          photo: require("@/assets/man.png"),
        },
        {
          name: "Maria Doe",
          role: "CTO",
          photo: require("@/assets/women.jpeg"),
        },
        // Add more team members here
      ],
    };
  },
});
</script>

<style scoped>
.about-us {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.banner {
  text-align: center;
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.banner img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.banner h1 {
  margin-top: 1rem;
  font-size: 2.5rem;
}

.intro,
.mission,
.values,
.team,
.contact {
  margin-top: 2rem;
  text-align: center;
}

.intro img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}

.mission,
.values {
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.values ul {
  list-style-type: none;
  padding: 0;
}

.values li {
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.2rem;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.team img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.team h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.contact a {
  color: #007bff;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}
</style>
