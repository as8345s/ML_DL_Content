

""" main_page.py
Autor:           Alexander Schechtel
Description:     ---
Written in:      IDE PyCharm.


For that the project must have the structure:
   project/
        main.py
        pages/
            page_0.py
            page_n-1.py

"""

import streamlit as st

def main():

    st.title("Welcome user")
    st.write("---")

    st.sidebar.title("Sidebar titile")
    #st.markdown()
    #st.sidebar.markdown()
    st.sidebar.write("Sidebar text")


if __name__ == "__main__":
     main()