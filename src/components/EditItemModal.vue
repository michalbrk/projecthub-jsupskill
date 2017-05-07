<template>
  <!-- Modal Structure -->
  <div id="modal1" class="modal modal-fixed-footer">
    <div class="modal-content">
      <form class="col s12" @submit.prevent="submit">
        <div class="row">
          <div class="input-field col s6">
            <input type="text" class="validate" v-model="editedItem.name">
            <label class="active">Nazwa</label>
          </div>
          <div class="input-field col s6">
            <input id="item_date" type="text" class="validate" v-model="createdOn">
            <label for="item_date" class="active">Data dodania</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea class="materialize-textarea" v-model="editedItem.description"></textarea>
            <label class="active">Opis</label>
          </div>
        </div>
        <transition-group name="slide" mode="in-out">
          <div class="row" v-for="(attachment, index) in editedItem.attachments" :key="index">
            <div class="input-field col s5">
              <input type="text" class="validate" v-model="attachment.name">
              <label class="active">Opis linku</label>
            </div>
            <div class="input-field col s5">
              <input type="text" class="validate" v-model="attachment.href">
              <label class="active">Link</label>
            </div>
            <div class="col s2">
              <i class="delete-icon small material-icons" @click="deleteLink(attachment)">delete</i>
            </div>
          </div>
        </transition-group>
        <a class="btn-floating btn-small waves-effect waves-light red left" @click="addAnotherAtt"><i class="material-icons">add</i></a>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn light-blue darken-3" @click.prevent="cancelEdit">Cancel</button>
      <button class="btn light-blue darken-3" @click.prevent="saveItem">Zapisz</button>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main'
  import _ from 'lodash'

  export default {
    props: ['event'],
    data () {
      return {
        createdOn: this.event.date.toLocaleDateString('pl-PL'),
        editedItem: {
          _id: this.event._id,
          name: this.event.name,
          description: this.event.description,
          attachments: this.event.attachments
        }
      }
    },
    computed: {
      date () {
        return new Date(this.createdOn.split('.').reverse().join('-'))
      }
    },
    methods: {
      addAnotherAtt () {
        if (typeof this.editedItem.attachments === 'undefined') {
          this.editedItem.attachments = []
        }
        this.editedItem.attachments.push({ name: '', href: '' })
      },
      saveItem () {
        this.editedItem.date = new Date(this.date)
        eventBus.$emit('itemWasEdited', this.editedItem)
      },
      cancelEdit () {
        eventBus.$emit('editWasCanceled')
      },
      deleteLink (link) {
        let index = _.indexOf(this.editedItem.attachments, link)
        this.editedItem.attachments.splice(index, 1)
      }
    }
  }
</script>

<style>
  .delete-icon {
    cursor: pointer;
  }
</style>
