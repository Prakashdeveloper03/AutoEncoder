<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [{
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Siva Prakash',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/Prakashdeveloper03' },
    ]
  },
  {
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Kamaleshwar',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/KamaleshwarG' }
    ]
  },
  {
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Pooja',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/poojashree1018' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
The advancement of autoencoder technology is driven by a collaborative and diverse team of students.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
