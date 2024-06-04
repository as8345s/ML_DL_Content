""" Page_1
Autor:           Alex.S
Description:     ---
Written in:      IDE PyCharm.


"""

import streamlit as st
import pandas as pd
import time




def main():
    """Enter Page: page_1

    """

    # Text and description
    st.title("Random-Forest regressor")
    st.write("Let's do some regression!")
    st.write("About Random-Forest [...]")
    st.write(f"On the left side you can change the setting of the Random Forest model. \
             [...]")


    # Set RM options
    st.sidebar.title("RM-Options")
    rm_max_depth_option_list = [2, 8, 16]
    st.sidebar.radio("max_depth", rm_max_depth_option_list, key="rm_key_options")
    st.sidebar.slider("random_state", 0, 200, key="slider")

    string_code:str = (f"# Random-Forest Model \n"
                       f"model = RandomForestRegressor(max_depth={st.session_state['rm_key_options']}, random_state={st.session_state['slider']})")
    st.code(string_code, language='python')


    st.write(f"season content: {st.session_state}")

    st.sidebar.markdown("""---""")
    st.sidebar.subheader("Dataset")
    st.sidebar.write("Choose a dataset for training")

    radio_dataset_choice = ["SECOND HAND CARS DATA SET", "Dataset 2"]
    st.sidebar.radio("Dataset", radio_dataset_choice, key="dataset_choice", index=None)

    st.sidebar.number_input("validation data in (15-40%)", key="percent_val", min_value=15, max_value=40, value=20)
    st.sidebar.checkbox("Sort out validation data from dataset", key="sort_out_val")



if __name__ == "__main__":
    main()