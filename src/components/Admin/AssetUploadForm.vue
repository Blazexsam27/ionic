<template>
  <form class="asset_upload_form" @submit.prevent="handleSubmit">
    <!-- File Name -->
    <label for="filename">File Name </label>
    <input
      type="text"
      id="filename"
      placeholder="React vibrant design"
      v-model="fileData.fileName"
    />

    <!-- File Description -->
    <label for="filedescription">File description </label>
    <textarea
      v-model="fileData.fileDescription"
      name="filedescription"
      id="filedescription"
      cols="30"
      rows="10"
    ></textarea>

    <!-- File upload input -->
    <label for="fileupload">File</label>
    <input type="file" @change="handleFileChange" />

    <!-- File thumbnails input -->
    <label for="thumbnail">Thumbnails</label>
    <input type="file" @change="handleThumbnailChange" multiple />

    <!-- Website asset checkbox -->
    <div class="website_asset_checkbox">
      <label for="website_asset">Website Asset</label>
      <input
        type="checkbox"
        v-model="fileData.isWebsiteAsset"
        name="website_asset"
        id="website_asset"
      />
    </div>

    <!-- Tags -->
    <label for="tags">Tags</label>
    <input
      type="text"
      placeholder="React, Bootstrap..."
      @change="handleTagsChange"
    />

    <!-- File Category -->
    <label for="filecategory">File Category</label>
    <select
      v-model="fileData.selectedCategory"
      name="filecategory"
      id="filecategory"
    >
      <option value="Default">Default</option>
      <option v-for="item of categories" :key="item" :value="item">
        {{ item }}
      </option>
    </select>

    <div class="price_and_discount">
      <!-- Price -->
      <div>
        <label for="price">Price</label>
        <input type="number" v-model="fileData.price" />
      </div>

      <!-- Discount -->
      <div>
        <label for="discount">Discount</label>
        <input type="number" v-model="fileData.discount" />
      </div>
    </div>
    <!-- Tech Stack -->

    <div class="submit_btn">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import catalogService from "@/services/Catalog/catalog.service";
export default {
  name: "AssetUploadForm",
  data() {
    return {
      categories: ["Material", "Dark", "Soft", "Light", "Modern", "Argon"],
      techs: [
        "React",
        "Vue",
        "Angular",
        "TailwindCSS",
        "Material UI",
        "Bootstrap",
      ],

      fileData: {
        fileName: "",
        fileDescription: "",
        selectedFile: null,
        thumbnails: [],
        isWebsiteAsset: false,
        tags: "",
        selectedCategory: "Default",
        selectedTechs: [],
        price: "",
        discount: "",
      },
    };
  },
  methods: {
    handleFileChange(event) {
      this.fileData.selectedFile = event.target.files[0];
    },
    handleThumbnailChange(event) {
      this.fileData.thumbnails = event.target.files;
    },
    handleTagsChange(event) {
      this.fileData.tags = event.target.value.split(",");
    },

    async handleSubmit() {
      // Access your form data here
      console.log("File Data:", this.fileData);

      console.log(
        "Total Price",
        this.fileData.price -
          this.fileData.price * (this.fileData.discount / 100)
      );

      try {
        // check if the asset is a website asset or catalog asset.
        if (this.fileData.isWebsiteAsset) {
          const {
            fileName,
            fileDescription,
            isWebsiteAsset,
            tags,
            selectedCategory,
            selectedTechs,
            price,
            discount,
          } = this.fileData;
          const fileData = {
            fileName,
            fileDescription,
            isWebsiteAsset,
            tags,
            selectedCategory,
            selectedTechs,
            price,
            discount,
          };

          const response = await catalogService.uploadToBucket(
            "website_assets",
            {
              webFile: this.fileData.selectedFile,
              thumbnails: this.fileData.thumbnails,
            },
            fileData
          );

          console.log("response", response);
          alert("Uploaded Successfully");
        } else {
        }
      } catch (error) {
        alert("Error While upload", error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.asset_upload_form {
  @include dflex($justify: normal, $align: normal, $flex: column);
  @include boxshadow;
  width: 40%;
  height: fit-content;
  padding: 15px 20px;

  border-radius: 10px;
  input,
  select,
  textarea {
    padding: 4px;
  }

  .price_and_discount {
    @include dflex($justify: normal, $align: normal);
    div {
      @include dflex($justify: normal, $align: center);
      width: 50%;
      input {
        width: 75%;
      }
    }
  }
  .website_asset_checkbox {
    @include dflex($justify: start, $align: normal);
  }
  .submit_btn {
    @include dflex($align: normal);
    button {
      border: 1px solid $white-05;
      padding: 5px 20px;
      background: $text-color-white;
      color: $text-black-08;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        color: $orange-red;
      }
    }
  }
}
</style>
@/services/Catalog/firebase.service
