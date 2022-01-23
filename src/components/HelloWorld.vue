<template>
  <div>
    <div class="row justify-content-center cust-row">
      <div class="col-lg-8">
        <div class="card mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-lg-6 text-start">
                <p>{{ data.title }}</p>
              </div>
              <div class="col-lg-6 text-end">
                <p>{{ data.created_at }}</p>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form action="" method="post">
              <div class="fst-section">
                <h5 class="text-start">
                  {{ data.sections[0].section_title }}
                </h5>
                <div
                  v-for="(item, key) in data.sections[0].questions"
                  :key="key"
                >
                  <div class="qthink text-start">
                    <span class="num">{{ key + 1 }}</span>
                    <span class="qustiuon">
                      {{ item.instructions }}
                    </span>
                  </div>
                  <div class="qbody my-2">
                    <div
                      class="multiple text-start mx-2"
                      v-for="(multi, key) in item.options"
                      :key="key"
                    >
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          :value="multi"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          {{ multi }}
                        </label>
                      </div>
                    </div>
                    <div
                      class="text-are"
                      v-if="
                        item.instructions ==
                        'If the ratio between female to male users on an app is 9:2 and there are 1,026 female users, how many male users use the app?'
                      "
                    >
                      <input
                        type="text"
                        class="form-control w-25"
                        placeholder="Answer Goes here..."
                      />
                    </div>
                    <div
                      class="text-are"
                      v-if="item.instructions == 'How much is 1 + 1?'"
                    >
                      <input
                        type="text"
                        class="form-control w-25"
                        placeholder="Answer Goes here..."
                      />
                    </div>
                  </div>
                  <p class="qanswer d-flex mt-2 mb-3">
                    Answer:
                    <span class="font-weight-bold"> {{ item.answer }}</span>
                  </p>
                </div>
              </div>

              <div class="snd-section">
                <h5 class="text-start">
                  {{ data.sections[1].section_title }}
                </h5>

                <div
                  v-for="(item, key) in data.sections[1].questions"
                  :key="key"
                >
                  <div class="qthink text-start">
                    <span class="num">{{ key + 1 }}</span>
                    <span class="qustiuon">
                      {{ item.instructions }}
                    </span>
                    <div class="textarei my-2" v-if="item.type == 'open_text'">
                      <textarea
                        class="form-control"
                        id="validationTextarea"
                        placeholder="Answer Goes here..."
                        required
                      ></textarea>
                    </div>

                    <div class="multiyes my-2" v-if="item.type == 'multiple'">
                      <div
                        class="form-check"
                        v-for="(opt, key) in item.options"
                        :key="key"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          :value="opt"
                          checked
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          {{ opt }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-3">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import assessment_data from "../Json/assessment_data.json";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      data: [],
      count: 0,
    };
  },
  created() {
    this.data = assessment_data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  margin-bottom: 0px;
}

.cust-row {
  margin: 0px;
}
</style>
