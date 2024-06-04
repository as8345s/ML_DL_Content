import streamlit as st

def main():

    st.title("Welcome user")
    st.write("---")

    st.sidebar.title("Sidebar titile")
    st.sidebar.write("Sidebar text")


if __name__ == "__main__":
     main()