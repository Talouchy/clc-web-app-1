<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-layout
        row
        wrap
        class="rust_app_color lighten-1"
        pa-2>
        <!-- Blog Image -->
        <v-img
          src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/49472258_2212601089061138_8933023185264181248_o.jpg?_nc_cat=111&_nc_ht=scontent.fcbr1-1.fna&oh=c8c73de9ee30793e7299e6dd7c6a6577&oe=5D2548F5"
          aspect-ratio="2.75"
          height="450px"
          width="150px" />
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout
        pa-3
        align-center
        row
        wrap>
        <v-layout
          row
          wrap>
          <v-flex text-xs-center>
            <v-card
              class="rounded-corner"
              elevation-10>
              <v-layout
                row
                wrap
                fluid
                align-center="true">
                <!-- Blog details block-->
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      Study Melbourne Ambassador Program
                    </div>
                    <v-card-text
                      class="text-xs-left "
                      v-text="d" />
                  </div>
                </v-card-title>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Blog buttons-->
        <v-layout
          v-show="!dialog"
          align-center
          justify-center
          fill-height>
          <v-flex
            xs12>
            <div class="float-center-button text-xs-center ma-auto">
              <v-btn
                round
                color="primary"
                dark
                ma-auto
                class="mx-0 px-1"
                @click="toggleBookmark">
                <v-icon
                  v-model="isBookmarked"
                  left
                  dark
                  class="mr-0">
                  {{ (isBookmarked)?'bookmark':'bookmark_border' }}
                </v-icon>
              </v-btn>
              <v-btn
                round
                color="primary"
                dark
                ma-auto
                class="mx-0 px-1"
                @click.stop="dialog = true">
                <v-icon
                  left
                  dark
                  class="mr-0">
                  comment
                </v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>

    <!-- Comment section -->
    <v-layout
      row
      justify-center>
      <v-dialog
        v-model="dialog"
        fullscreen
        scrollable
        elevation-6
        transition="dialog-bottom-transition">
        <v-flex
          class="">
          <v-card
            class="pl-3 pt-4">
            <v-card-actions 
              style="z-index: 99"
              class="float-center-button">
              <v-spacer />
              <v-btn
                round
                color="primary"
                dark
                ma-auto
                @click="dialog = !dialog">
                <v-icon
                  left
                  dark
                  class="mr-0">
                  keyboard_arrow_left
                </v-icon>
              </v-btn>
            </v-card-actions>
            <v-timeline
              dense
              clipped
              class="pr-3">
              <v-timeline-item
                class="white--text"
                color="black lighten-2"
                large>
                <v-avatar slot="icon">
                  <img src="http://i.pravatar.cc/64">
                </v-avatar>
                <v-text-field
                  v-model="commentText"
                  placeholder="Write Comment..."
                  color="purple darken-2"
                  clearable
                  append-outer-icon="send"
                  clear-icon="cancel"
                  @click:append-outer="addComment(commentText)"/>
              </v-timeline-item>

              <v-timeline-item
                v-for="(comment, commentIndex) in blog.comments"
                :key="commentIndex"
                class="mb-3"
                color="purple lighten-1"
                large>
                <!-- Item icon -->
                <span
                  v-if="comment.userPic === ''"
                  slot="icon"
                  class="font-weight-black headline">
                  {{ comment.userInitials.toUpperCase() }}
                </span>
                <v-avatar
                  v-else-if="comment.userPic !== ''"
                  slot="icon">
                  <img :src="comment.userPic">
                </v-avatar>
                <!-- Item text font-weight-black-->
                <v-layout
                  align-start
                  justify-start
                  fill-height>
                  <v-flex >
                    <p :class="(comment.showReplys)?'font-weight-black':''">
                      {{ comment.text }}
                      <span
                        class="blue-grey--text text--lighten-1 caption font-italic">
                        ~ ({{ comment.timestamp }})
                      </span>
                    </p>
                  </v-flex>
                  <transition
                    name="fade"
                    mode="in-out">
                    <v-btn
                      v-if="comment.replyComments.length > 0"
                      flat
                      icon
                      small
                      outline
                      fab
                      class="ma-0"
                      color="putple darken-2"
                      @click="toggleReplys(commentIndex)">
                      <v-icon>{{ (comment.showReplys)?'expand_less':'expand_more' }}</v-icon>
                    </v-btn>
                  </transition>
                </v-layout>

                <!-- Comment Replys -->
                <transition
                  name="fade"
                  mode="out-in">
                  <v-timeline
                    v-if="comment.replyComments.length > 0"
                    v-show="comment.showReplys"
                    dense
                    clipped
                    class="pa-0">
                    <v-timeline-item
                      v-for="(replyComment, replyCommentIndex) in comment.replyComments"
                      :key="replyCommentIndex"
                      fill-dot
                      small
                      class="pa-0"
                      color="purple lighten-3">
                      <span
                        v-if="replyComment.userPic === ''"
                        slot="icon"
                        class="font-weight-black subheading">
                        {{ replyComment.userInitials.toUpperCase() }}
                      </span>
                      <v-avatar
                        v-else-if="replyComment.userPic !== ''"
                        slot="icon">
                        <img :src="replyComment.userPic">
                      </v-avatar>
                      <p>
                        {{ replyComment.text }}
                        <span
                          class="blue-grey--text text--lighten-1 caption font-italic">
                          ~ ({{ replyComment.timestamp }})
                        </span>
                      </p>
                    </v-timeline-item>
                    <v-timeline-item
                      class="white--text pa-0"
                      color="black lighten-2"
                      large>
                      <v-avatar slot="icon">
                        <img src="http://i.pravatar.cc/64">
                      </v-avatar>
                      <v-text-field
                        v-model="replyCommentText"
                        placeholder="Reply Comment..."
                        color="purple darken-2"
                        clearable
                        append-outer-icon="send"
                        clear-icon="cancel"
                        @click:append-outer="replyToComment(commentIndex, replyCommentText)"/>
                    </v-timeline-item>
                  </v-timeline>
                </transition>
              </v-timeline-item>

              <!-- Load more button -->
              <v-timeline-item
                hide-dot>
                <v-layout>
                  <v-flex>
                    <v-btn
                      outline
                      color="indigo">
                      Load More
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-flex>
      </v-dialog>
    </v-layout>
  </v-layout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<script>
export default {
  name: 'BlogDetails',
  data() {
    return {
      commentText: '',
      replyCommentText: '',
      replys: false,
      dialog: false,
      isBookmarked: true,
      d:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      blog: {
        comments: [
          {
            userID: 'user1',
            userPic: 'http://i.pravatar.cc/64',
            userInitials: 'JD',
            text: 'Where can I find more info about this post???',
            timestamp: '15:25 9/3/19',
            showReplys: false,
            replyComments: [
              {
                userID: 'user2',
                userPic: 'http://i.pravatar.cc/65',
                userInitials: 'DL',
                text: 'More info is found on the website',
                timestamp: '15:25 10/3/19'
              },
              {
                userID: 'user3',
                userPic: '',
                userInitials: 'PT',
                text: 'I was able to find info at www.google.com :D',
                timestamp: '16:30 11/3/19'
              }
            ]
          },
          {
            userID: 'user453',
            userPic: 'http://i.pravatar.cc/66',
            userInitials: 'SD',
            text:
              'If you just want one open you can pass an id as a prop and show it based on that.',
            timestamp: '15:25 9/3/19',
            showReplys: false,
            replyComments: []
          },
          {
            userID: 'user133',
            userPic: '',
            userInitials: 'JD',
            text: 'What is this about',
            timestamp: '15:25 9/3/19',
            showReplys: false,
            replyComments: [
              {
                userID: 'user23',
                userPic: '',
                userInitials: 'AD',
                text: 'More info is found on the website',
                timestamp: '15:25 10/3/19'
              },
              {
                userID: 'user70',
                userPic: 'http://i.pravatar.cc/67',
                userInitials: 'GG',
                text: 'I was able to find info at www.google.com :D',
                timestamp: '16:30 11/3/19'
              }
            ]
          },
          {
            userID: 'user45',
            userPic: '',
            userInitials: 'PP',
            text: 'I am trying to test this comment section.',
            timestamp: '15:25 9/3/19',
            showReplys: false,
            replyComments: []
          }
        ]
      }
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Blog Post')
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked
    },
    toggleReplys(index) {
      this.blog.comments[index].showReplys = !this.blog.comments[index]
        .showReplys
    },
    addComment(text) {
      if (text === '') return
      let comment = {
        userID: 'user1',
        userPic: 'http://i.pravatar.cc/64',
        userInitials: 'JD',
        text: '[Commenting] ' + text,
        timestamp: '15:25 9/3/19',
        showReplys: false,
        replyComments: []
      }

      this.blog.comments.unshift(comment)
      this.commentText = ''
    },
    replyToComment(index, text) {
      if (text === '') return

      let comment = {
        userID: 'user23',
        userPic: 'http://i.pravatar.cc/64',
        userInitials: 'JD',
        text: '[replying to comment] ' + text,
        timestamp: '15:25 10/3/19'
      }

      this.blog.comments[index].replyComments.unshift(comment)
      this.replyCommentText = ''
    }
  }
}
</script>
