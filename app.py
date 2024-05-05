# app.py

"""
Horror Site

このモジュールは、ホラーサイトのFlaskアプリケーションを定義します。

Author: [Your Name]
Date: [Date]
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """
    インデックスページをレンダリングします。

    Returns:
        str: インデックスページのレンダリングされたHTMLコンテンツ。
    """
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
