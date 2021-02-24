<template>
    <div class="video-player mb-8">
        <vue-plyr v-if="type === 'video' && source === 'youtube'">
            <div class="plyr__video-embed">
                <iframe :src="youtubeURL" allowfullscreen allowtransparency allow="autoplay">
                </iframe>
            </div>
        </vue-plyr>
        <vue-plyr v-if="type === 'video' && source === 'vimeo'">
            <div class="plyr__video-embed">
                <iframe :src="vimeoURL" allowfullscreen allowtransparency allow="autoplay">
                </iframe>
            </div>
        </vue-plyr>
        <vue-plyr v-if="type === 'video' && source === 'web'">
            <video :poster="thumbnail" :src="videoURL">
                <source v-for="(url, index) in videoSizeURLS" :key="url" :src="url" :type="videoType"
                    :size="videoSourceSizes[index]">
                <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
            </video>
        </vue-plyr>
        <vue-plyr v-if="type === 'audio' && source === 'web'">
            <source v-if="mp3URL" :src="mp3URL" type="audio/mp3" />
            <source v-if="oggURL" :src="oggURL" type="audio/ogg" />
        </vue-plyr>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        source: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: 'video'
       },
       vidId: {
           type: String,
           required: true
       }
    },
    computed: {
        vimeoURL() {
            return `https://player.vimeo.com/video/${this.vidId}?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media`
        },
         youtubeURL () {
            return `https://www.youtube.com/embed/${this.vidId}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
        }  
    }
})
</script>

<style>
div.plyr {
  @media only screen and (min-width: 800px) {
    max-height: 80vh !important;
    max-width: 80vw !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border-radius: 0.5rem;
  }
}

.plyr__control--overlaid {
  background-color: #e2e2e2 !important;
  &:not(button[data-plyr='captions'], button[data-plyr='settings'], button[data-plyr='fullscreen']) {
    color: #2f2f2f !important;
  }
  &:hover {
    background-color: #c9c3b2 !important;
    color: #1818a7 !important;
  }
}

button[data-plyr='play'] {
  color: #2f2f2f !important;
}

button.plyr__controls__item,
button.plyr__control,
div.plyr__menu__container {
  background-color: #e2e2e2 !important;
  &:not(button[data-plyr='captions'], button[data-plyr='settings'], button[data-plyr='fullscreen']) {
    color: #2f2f2f !important;
  }
  &:hover {
    &:not(div[id^='plyr-settings-']) {
      background-color: #c9c3b2 !important;
    }
    color: #1818a7 !important;
  }
}

button.plyr__control::before {
  background-color: #1818a7 !important;
}

div.plyr__volume {
  button.plyr__control {
    background-color: hsla(0, 0%, 0%, 0) !important;
    &:hover {
      background-color: #e2e2e2 !important;
    }
  }
}

button[data-plyr='captions'],
button[data-plyr='settings'],
button[data-plyr='fullscreen'] {
  background-color: hsla(0, 0%, 0%, 0) !important;
  &:hover {
    background-color: #e2e2e2 !important;
  }
}

input[id^='plyr-seek-'],
input[id^='plyr-volume-'] {
  color: #e2e2e2 !important;
}
</style>