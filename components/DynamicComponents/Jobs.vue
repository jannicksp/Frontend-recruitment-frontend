<template>
  <div class="page-jobs uneven">
    <h2>{{ content.Title }}</h2>
    <p>{{ content.Content }}</p>

    <section class="checkbox-flex space">
      <div v-for="department in departments" :key="department.id" class="sort--box">
        <div class="img-container">
          <img :src="getDepartmentSrc(department)" :alt="department" />
        </div>
        <label>
          {{department}}
          <div>
            <input v-model="checkedDepartments" type="checkbox" :value="department" />
          </div>
        </label>
      </div>
    </section>

    <section class="jobs-list">
      <transition v-for="job in filteredJobs" :key="job.id" name="fade">
        <article v-if="job.Active" class="job-card">
          <img
            class="job-card__image"
            :src="job.Image[0].url"
            :alt="`Job opening: ${job.Title} in ${job.Department}`"
          />
          <h4 class="job-card__title">{{job.Title}}</h4>
          <span class="job-card__department">{{job.Department}}</span>
          <p class="job-card__text">{{job.Content}}</p>
          <a
            class="btn btn--big btn--red job-card__btn"
            :href="job.Link"
            target="_blank"
            rel="noopener"
            :title="`Apply for ${job.Title} here`"
          >Apply Here</a>
        </article>
      </transition>
      <h3 v-if="filteredJobs.length === 0">No jobs at the chosen department 😭</h3>
    </section>
  </div>
</template>

<script>
import jobsQuery from '~/apollo/queries/jobs/jobs'

export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      jobs: {},
      departments: [
        'Aarhus',
        'Barcelona',
        'Copenhagen',
        'Ebeltoft',
        'London',
        'Oslo'
      ],
      checkedDepartments: []
    }
  },
  computed: {
    filteredJobs() {
      if (!this.checkedDepartments.length) {
        return this.jobs
      }

      return this.jobs.filter((job) =>
        this.checkedDepartments.includes(job.Department)
      )
    }
  },
  methods: {
    getDepartmentSrc(department) {
      return `/departments/${department.toLowerCase()}.png`
    }
  },
  apollo: {
    jobs: {
      prefetch: true,
      query: jobsQuery
    }
  }
}
</script>

<style scoped>
:root {
  --page-jobs-bg: #232323;
}
@media (max-width: 800px) {
  .checkbox-flex {
    flex-wrap: wrap;
    padding-bottom: 25px;
  }
}
.page-jobs {
  background: var(--page-jobs-bg);
}
.checkbox-flex {
  display: flex;
  justify-content: center;
  text-align: center;
}
.card {
  justify-content: center;
}
.sort--box {
  width: 33%;
}
.text-center {
  text-align: center;
  border: 1px solid transparent;
  box-shadow: black 7px 4px 9px 9px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
label {
  font-size: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
}
.img-container img {
  width: 80px;
}
input[type='checkbox'] {
  width: 30px;
  height: 30px;
  -moz-appearance: none;
  appearance: none;
  vertical-align: middle;
  outline: none;
  font-size: inherit;
  cursor: pointer;

  border-radius: 0.25em;
  border: 2px solid white;
  position: relative;
}
input[type='checkbox']:checked {
  background: #c80046;
}
h4,
h5 {
  padding: 10px;
}

.jobs-list {
  display: flex;
  margin-right: 20px;
  margin-left: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (--viewport-sm-min) {
    margin-right: 20%;
    margin-left: 20%;
  }
}

.job-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  background-color: var(--color-dark);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-radius: 6px;

  @media (--viewport-md-min) {
    width: 49%;
  }

  @media (--viewport-lg-min) {
    width: 32%;
  }

  &__image {
    width: 100%;
    height: 25vmax;
    object-fit: cover;

    @media (--viewport-sm-min) {
      height: 20vmax;
    }

    @media (--viewport-md-min) {
      height: 15vmax;
    }

    @media (--viewport-lg-min) {
      height: 10vmax;
    }
  }

  &__department {
    font-size: 13px;
    color: white;
    background-color: var(--color-red);
    padding: 3px 15px;
    position: absolute;
    right: 15px;
    top: 15px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: calc(27px / 2);
  }

  &__title {
    color: var(--color-red);
    padding: 30px 15px 15px;
  }

  &__text {
    margin: 0 0 20px;
  }

  &__btn {
    margin-top: auto;
    align-self: center;
  }
}

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(15px);
}
</style>

