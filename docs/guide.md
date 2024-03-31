<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [{
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Dr Deivamani',
    title: 'Professor',
    links: [
      { icon: 'github', link: 'https://github.com/DeivamaniM' }
    ]
  },
  {
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Muthumani',
    title: 'Guide',
    links: [
      { icon: 'github', link: 'https://github.com/muthumani' }
    ]
  },
  {
    avatar: 'https://github.com/identicons/jasonlong.png',
    name: 'Aakash Gnanakumar',
    title: 'Guide',
    links: [
      { icon: 'github', link: 'https://github.com/aakgna' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Guides
    </template>
    <template #lead>
The advancement of autoencoder technology is driven by a collaborative and diverse team of guides.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
