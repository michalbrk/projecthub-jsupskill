<template>
  <div class="row" style="margin-top: 50px;">
    <form class="col s12" @submit.prevent="submit">
      <div class="row">
        <div class="input-field col s6">
          <input  id="item_name" type="text" class="validate" v-model="newEvent.name">
          <label for="item_name">Nazwa</label>
        </div>
        <div class="input-field col s6">
          <input id="item_date" type="text" class="validate" v-model="createdOn">
          <label for="item_date" class="active">Data dodania</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="item_content" class="materialize-textarea" v-model="newEvent.description"></textarea>
          <label for="item_content">Opis</label>
        </div>
      </div>
      <div class="row" v-for="attachment in attachments">
        <div class="input-field col s6">
          <input type="text" class="validate" v-model="attachment.name">
          <label>Opis linku</label>
        </div>
        <div class="input-field col s6">
          <input type="text" class="validate" v-model="attachment.href">
          <label>Link</label>
        </div>
      </div>
      <a class="btn-floating btn-small waves-effect waves-light red right" @click="addAnotherLink"><i class="material-icons">add</i></a>
      <button class="btn light-blue darken-3" type="submit" name="action">Dodaj
        <i class="material-icons right">send</i>
      </button>
      <button class="btn light-blue darken-3 add-new-btn" href="/project/nazwa">Wróć</button>
    </form>
  </div>
</template>

<script>
  import _ from 'lodash'
  import mock from '../data/mock'

  export default {
    data () {
      return {
        createdOn: new Date().toLocaleDateString('pl-PL'),
        attachments: [
          { name: '', href: '' }
        ],
        newEvent: {
          name: '',
          description: ''
        },
        projectName: 'nazwa'
      }
    },
    computed: {
      date () {
        return new Date(this.createdOn.split('.').reverse().join('-'))
      }
    },
    methods: {
      addAnotherLink () {
        this.attachments.push({ name: '', href: '' })
      },
      submit () {
        let id = Math.floor(Math.random() * 10000000)
        let event = _.clone(this.newEvent)
        event['_id'] = id
        event.date = this.date
        event.attachments = this.attachments
        const project = _.find(mock, {name: this.projectName})
        project.events.push(event)
        this.newEvent.name = ''
        this.attachments = [ { name: '', href: '' } ]
        this.newEvent.description = ''
        console.log('redirect to /project/project_name')
      }
    }
  }
</script>
